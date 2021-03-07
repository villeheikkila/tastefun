import { client } from "../client";
import { findAllTreats } from "./treats.queries";

export const treatResolver = {
  Query: {
    treats: () => findAllTreats.run({ limit: "1000" }, client),
  },
};
