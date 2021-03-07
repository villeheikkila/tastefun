/*
  @name InsertUsers
  @param users -> ((id, name)...)
*/
INSERT INTO users (id, name)
VALUES :users RETURNING *;