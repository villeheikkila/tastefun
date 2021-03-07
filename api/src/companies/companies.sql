/*
  @name InsertCompanies
  @param companies -> ((id, name)...)
*/
INSERT INTO companies (id, name)
VALUES :companies RETURNING *;

/* @name FindAllCompanies */
SELECT *
FROM companies 
LIMIT :limit;
