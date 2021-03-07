import { client } from "../client";
import { getAllUsers } from "./users.service";

export const userResolver = {
  Query: {
    users: () => getAllUsers(),
  },
};
