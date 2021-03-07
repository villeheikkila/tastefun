/*
  @name InsertSubcategories
  @param subcategories -> ((id, name, category_id)...)
*/
INSERT INTO subcategories (id, name, category_id)
VALUES :subcategories RETURNING *;