/*
  @name InsertSubcategories
  @param subcategories -> ((id, name, category_id)...)
*/
INSERT INTO subcategories (id, name, category_id)
VALUES :subcategories RETURNING *;

/* @name FindAllSubcategories */
SELECT s.*, c.name as category_name
FROM subcategories s
LEFT JOIN categories c ON c.id = s.category_id 
LIMIT :limit;