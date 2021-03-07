/*
  @name InsertCategories
  @param categories -> ((id, name)...)
*/
INSERT INTO categories (id, name)
VALUES :categories RETURNING *;

/* @name FindAllCategories */
SELECT *
FROM categories 
LIMIT :limit;
