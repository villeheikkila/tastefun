import { Client } from "pg";

export const client = new Client({
  host: process.env.PGHOST ?? "127.0.0.1",
  user: process.env.PGUSER ?? "postgres",
  password: process.env.PGPASSWORD ?? "password",
  database: process.env.PGDATABASE ?? "postgres",
  port: (process.env.PGPORT ? Number(process.env.PGPORT) : undefined) ?? 5432,
});
