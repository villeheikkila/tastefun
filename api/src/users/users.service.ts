import { client } from "../client";
import { findAllUsers } from "./users.queries";
import * as R from "remeda";

export const getAllUsers = async () => {
  const allUsers = await findAllUsers.run({ limit: "1000" }, client);
  console.log("allUsers: ", allUsers);
  return R.map(allUsers, ({ rating, rating_id, ...rest }) => ({
    ...rest,
    reviews: { rating, id: rating_id },
  }));
};
