import { gql } from "apollo-server";
import { client } from "../client";
import { findAllCategories } from "./categories.queries";

const categoriesResolver = {
  Query: {
    categories: () => findAllCategories.run({ limit: "100" }, client),
  },
};

export { categoriesResolver };
