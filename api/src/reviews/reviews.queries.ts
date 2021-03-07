/** Types generated for queries found in "src/reviews/reviews.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertReviews' parameters type */
export interface IInsertReviewsParams {
  reviews: readonly ({
    id: number | null | void,
    rating: number | null | void,
    user_id: number | null | void,
    treat_id: number | null | void
  })[];
}

/** 'InsertReviews' return type */
export interface IInsertReviewsResult {
  id: number;
  rating: number | null;
  treat_id: number | null;
  user_id: number | null;
}

/** 'InsertReviews' query type */
export interface IInsertReviewsQuery {
  params: IInsertReviewsParams;
  result: IInsertReviewsResult;
}

const insertReviewsIR: any = {"name":"InsertReviews","params":[{"name":"reviews","codeRefs":{"defined":{"a":34,"b":40,"line":3,"col":9},"used":[{"a":145,"b":151,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":["id","rating","user_id","treat_id"]}}],"usedParamSet":{"reviews":true},"statement":{"body":"INSERT INTO reviews (id, rating, user_id, treat_id)\nVALUES :reviews RETURNING *","loc":{"a":85,"b":163,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO reviews (id, rating, user_id, treat_id)
 * VALUES :reviews RETURNING *
 * ```
 */
export const insertReviews = new PreparedQuery<IInsertReviewsParams,IInsertReviewsResult>(insertReviewsIR);


/** 'FindAllReviews' parameters type */
export interface IFindAllReviewsParams {
  limit: string | null | void;
}

/** 'FindAllReviews' return type */
export interface IFindAllReviewsResult {
  id: number;
  rating: number | null;
  treat_id: number | null;
  user_id: number | null;
}

/** 'FindAllReviews' query type */
export interface IFindAllReviewsQuery {
  params: IFindAllReviewsParams;
  result: IFindAllReviewsResult;
}

const findAllReviewsIR: any = {"name":"FindAllReviews","params":[{"name":"limit","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":225,"b":229,"line":12,"col":7}]}}],"usedParamSet":{"limit":true},"statement":{"body":"SELECT *\nFROM reviews \nLIMIT :limit","loc":{"a":195,"b":229,"line":10,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM reviews 
 * LIMIT :limit
 * ```
 */
export const findAllReviews = new PreparedQuery<IFindAllReviewsParams,IFindAllReviewsResult>(findAllReviewsIR);


