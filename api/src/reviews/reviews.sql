/*
  @name InsertReviews
  @param reviews -> ((id, rating, user_id, treat_id)...)
*/
INSERT INTO reviews (id, rating, user_id, treat_id)
VALUES :reviews RETURNING *;


/* @name FindAllReviews */
SELECT *
FROM reviews 
LIMIT :limit;
