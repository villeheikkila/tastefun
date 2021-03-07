/*
  @name InsertUsers
  @param users -> ((id, name)...)
*/
INSERT INTO users (id, name)
VALUES :users RETURNING *;

/* @name FindAllUsers */
SELECT u.*, r.rating, r.id as rating_id
FROM users u
LEFT JOIN reviews r ON u.id = r.user_id 
LIMIT :limit;
