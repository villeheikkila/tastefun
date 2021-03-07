import { ApolloServer, gql } from "apollo-server";
import fs from "fs";

import { client } from "./client";
import { treatResolver } from "./treats/treats.resolver";
import { categoryResolver } from "./categories/categories.resolver";
import { reviewResolver } from "./reviews/reviews.resolver";
import { subcategoryResolver } from "./subcategories/subcategories.resolver";
import { userResolver } from "./users/users.resolver";
import { mergeResolvers } from "@graphql-tools/merge";
import { companyResolver } from "./companies/companies.resolver";

const typeDefs = [
  gql(fs.readFileSync(__dirname.concat("/categories/categories.gql"), "utf8")),
  gql(
    fs.readFileSync(
      __dirname.concat("/subcategories/subcategories.gql"),
      "utf8"
    )
  ),
  gql(fs.readFileSync(__dirname.concat("/reviews/reviews.gql"), "utf8")),
  gql(fs.readFileSync(__dirname.concat("/companies/companies.gql"), "utf8")),
  gql(fs.readFileSync(__dirname.concat("/treats/treats.gql"), "utf8")),
  gql(fs.readFileSync(__dirname.concat("/users/users.gql"), "utf8")),
];

const resolvers = mergeResolvers([
  categoryResolver,
  reviewResolver,
  treatResolver,
  companyResolver,
  subcategoryResolver,
  userResolver,
]);

const main = async () => {
  await client.connect();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main().catch((err) => {
  console.error(`Error occured: ${err.stack}`);
  process.exit(1);
});
