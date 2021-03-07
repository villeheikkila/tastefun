import neatCSV from "neat-csv";
import fs from "fs";
import * as R from "remeda";
import { IInsertUsersParams, insertUsers } from "../users/users.queries";
import {
  IInsertCompaniesParams,
  insertCompanies,
} from "../companies/companies.queries";
import {
  IInsertCategoriesParams,
  insertCategories,
} from "../categories/categories.queries";
import {
  IInsertSubcategoriesParams,
  insertSubcategories,
} from "../subcategories/subcategories.queries";
import { IInsertTreatsParams, insertTreats } from "../treats/treats.queries";
import {
  IInsertReviewsParams,
  insertReviews,
} from "../reviews/reviews.queries";
import { client } from "../client";

interface Treat {
  category: string;
  company: string;
  name: string;
  subcategory: string;
  rating: string;
}

const readCSV = async (fileName: string) => {
  return await neatCSV<Treat>(
    fs.readFileSync(__dirname + `/data/${fileName}.csv`),
    {
      separator: ";",
      headers: ["category", "company", "name", "subcategory", "rating"],
    }
  );
};

const users = [
  {
    id: 0,
    name: "Ville Heikkilä",
  },
];

const parseData = async (data: Treat[]) => {
  const categoryIdByKey = R.pipe(
    data,
    R.map(({ category }) => category),
    R.uniq(),
    R.mapToObj.indexed((x, i) => [x, i])
  );

  const companyIdByKey = R.pipe(
    data,
    R.map(({ company }) => company),
    R.uniq(),
    R.mapToObj.indexed((x, i) => [x, i])
  );

  const subcategoriesByKey = R.pipe(
    data,
    R.map(R.pick(["category", "subcategory"])),
    R.uniq(),
    R.mapToObj.indexed(({ subcategory, category }, id) => [
      subcategory,
      { id, category },
    ])
  );

  const treats = R.map.indexed(data, (result, id) => ({
    id,
    name: result.name,
    category_id: categoryIdByKey[result.category],
    subcategory_id: subcategoriesByKey[result.subcategory].id,
    company_id: companyIdByKey[result.company],
  }));

  const categories = Object.entries(categoryIdByKey).map(([name, id]) => ({
    id,
    name,
  }));

  const subcategories = Object.entries(subcategoriesByKey).map(
    ([key, { id, category }]) => ({
      id,
      category_id: categoryIdByKey[category],
      name: key,
    })
  );

  const companies = Object.entries(companyIdByKey).map(([name, id]) => ({
    id,
    name,
  }));

  const reviews = R.pipe(
    data,
    R.map.indexed(({ rating }, id) => ({
      id,
      user_id: users[0].id,
      rating: parseFloat(rating.replace(",", ".")),
    })),
    R.zip(treats),
    R.map((item) => ({ ...item[0], treat_id: item[1].id }))
  );

  return { reviews, treats, companies, subcategories, categories, users };
};

interface MigrateProps {
  users: IInsertUsersParams["users"];
  companies: IInsertCompaniesParams["companies"];
  categories: IInsertCategoriesParams["categories"];
  subcategories: IInsertSubcategoriesParams["subcategories"];
  treats: IInsertTreatsParams["treats"];
  reviews: IInsertReviewsParams["reviews"];
}

const migrateToDb = async ({
  users,
  companies,
  categories,
  subcategories,
  treats,
  reviews,
}: MigrateProps) => {
  await client.connect();

  const usersRes = await insertUsers.run({ users }, client);
  const companiesRes = await insertCompanies.run({ companies }, client);
  const categoriesRes = await insertCategories.run({ categories }, client);
  const subCategoriesRes = await insertSubcategories.run(
    { subcategories },
    client
  );

  const treatsRes = await insertTreats.run({ treats }, client);
  const reviewsRes = await insertReviews.run({ reviews }, client);

  console.log("Number of reviews added: ", reviewsRes.length);
  console.log("Number of reviews added: ", companiesRes.length);
  console.log("Number of reviews added: ", treatsRes.length);
  console.log("Number of reviews added: ", subCategoriesRes.length);
  console.log("Number of reviews added: ", categoriesRes.length);
  console.log("Number of reviews added: ", usersRes.length);

  await client.end();
};

const init = () => {
  readCSV("virvoitus")
    .then((data) => parseData(data))
    .then((result) => migrateToDb(result))
    .then(() => {
      process.exit(1);
    })
    .catch((error) => {
      console.log(`Error occured: ${error}`);
      process.exit(1);
    });
};

init();
