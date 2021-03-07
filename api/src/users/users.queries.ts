/** Types generated for queries found in "src/users/users.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertUsers' parameters type */
export interface IInsertUsersParams {
  users: readonly ({
    id: number | null | void,
    name: string | null | void
  })[];
}

/** 'InsertUsers' return type */
export interface IInsertUsersResult {
  id: number;
  name: string | null;
}

/** 'InsertUsers' query type */
export interface IInsertUsersQuery {
  params: IInsertUsersParams;
  result: IInsertUsersResult;
}

const insertUsersIR: any = {"name":"InsertUsers","params":[{"name":"users","codeRefs":{"defined":{"a":32,"b":36,"line":3,"col":9},"used":[{"a":97,"b":101,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":["id","name"]}}],"usedParamSet":{"users":true},"statement":{"body":"INSERT INTO users (id, name)\nVALUES :users RETURNING *","loc":{"a":60,"b":113,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO users (id, name)
 * VALUES :users RETURNING *
 * ```
 */
export const insertUsers = new PreparedQuery<IInsertUsersParams,IInsertUsersResult>(insertUsersIR);


/** 'FindAllUsers' parameters type */
export interface IFindAllUsersParams {
  limit: string | null | void;
}

/** 'FindAllUsers' return type */
export interface IFindAllUsersResult {
  id: number;
  name: string | null;
  rating: number | null;
  rating_id: number;
}

/** 'FindAllUsers' query type */
export interface IFindAllUsersQuery {
  params: IFindAllUsersParams;
  result: IFindAllUsersResult;
}

const findAllUsersIR: any = {"name":"FindAllUsers","params":[{"name":"limit","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":243,"b":247,"line":12,"col":7}]}}],"usedParamSet":{"limit":true},"statement":{"body":"SELECT u.*, r.rating, r.id as rating_id\nFROM users u\nLEFT JOIN reviews r ON u.id = r.user_id \nLIMIT :limit","loc":{"a":142,"b":247,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT u.*, r.rating, r.id as rating_id
 * FROM users u
 * LEFT JOIN reviews r ON u.id = r.user_id 
 * LIMIT :limit
 * ```
 */
export const findAllUsers = new PreparedQuery<IFindAllUsersParams,IFindAllUsersResult>(findAllUsersIR);


