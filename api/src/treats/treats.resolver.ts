import { gql } from "apollo-server";
import { client } from "../client";
import { findAllTreats } from "./treats.queries";

const treatResolver = {
  Query: {
    treats: () => findAllTreats.run({ limit: "1000" }, client),
  },
};

export { treatResolver };
