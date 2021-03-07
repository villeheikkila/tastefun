import { client } from "../client";
import { findAllCategories } from "./categories.queries";

export const categoryResolver = {
  Query: {
    categories: () => findAllCategories.run({ limit: "1000" }, client),
  },
};
