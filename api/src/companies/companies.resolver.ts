import { client } from "../client";
import { findAllCompanies } from "./companies.queries";

export const companyResolver = {
  Query: {
    companies: () => findAllCompanies.run({ limit: "100" }, client),
  },
};
