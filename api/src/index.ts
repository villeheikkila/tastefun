import { ApolloServer, gql } from "apollo-server";
import { findAllTreats } from "./treats/treats.queries";
import * as R from "remeda";
import fs from "fs";

import { client } from "./client";
import { treatResolver } from "./treats/treats.resolver";
import { categoriesResolver } from "./categories/categories.resolver";

const main = async () => {
  await client.connect();

  const server = new ApolloServer({
    typeDefs: [
      gql(
        fs.readFileSync(__dirname.concat("/categories/categories.gql"), "utf8")
      ),
      gql(fs.readFileSync(__dirname.concat("/treats/treats.gql"), "utf8")),
    ],
    resolvers: R.mergeAll([{}, treatResolver, categoriesResolver]),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main().catch((err) => {
  console.error(`Error occured: ${err.stack}`);
  process.exit(1);
});
