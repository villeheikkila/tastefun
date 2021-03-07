import { client } from "../client";
import { findAllSubcategories } from "./subcategories.queries";
import { getAllSubcategories } from "./subcategory.service";

export const subcategoryResolver = {
  Query: {
    subcategories: async () => await getAllSubcategories(),
  },
};
