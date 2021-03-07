/* @name FindAllTreats */
SELECT t.*, c.name as category_name, s.name as subcategory_name 
FROM treats t 
LEFT JOIN categories c ON c.id = t.category_id 
LEFT JOIN subcategories s ON s.id = t.subcategory_id 
LIMIT :limit;


/* @name FindTreatById */
SELECT * FROM treats WHERE id = :treatId;

/*
  @name InsertTreats
  @param treats -> ((id, name, category_id, company_id, subcategory_id)...)
*/
INSERT INTO treats (id, name, category_id, company_id, subcategory_id)
VALUES :treats RETURNING id as treat_id;

/* @name GetTreatByCategory */
SELECT b.* FROM treats b
INNER JOIN categories a ON a.id = b.category_id
WHERE a.name = :categoryName;
