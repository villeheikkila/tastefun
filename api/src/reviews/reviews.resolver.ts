import { client } from "../client";
import { findAllReviews } from "./reviews.queries";

export const reviewResolver = {
  Query: {
    reviews: () => findAllReviews.run({ limit: "1000" }, client),
  },
};
