import { client } from "../client";
import { findAllSubcategories } from "./subcategories.queries";
import * as R from "remeda";

export const getAllSubcategories = async () => {
  const findAll = await findAllSubcategories.run({ limit: "1000" }, client);
  return R.map(findAll, ({ category_id, category_name, ...rest }) => ({
    ...rest,
    category: { name: category_name, id: category_id },
  }));
};
