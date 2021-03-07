/** Types generated for queries found in "src/subcategories/subcategories.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertSubcategories' parameters type */
export interface IInsertSubcategoriesParams {
  subcategories: readonly ({
    id: number | null | void,
    name: string | null | void,
    category_id: number | null | void
  })[];
}

/** 'InsertSubcategories' return type */
export interface IInsertSubcategoriesResult {
  id: number;
  name: string | null;
  category_id: number | null;
}

/** 'InsertSubcategories' query type */
export interface IInsertSubcategoriesQuery {
  params: IInsertSubcategoriesParams;
  result: IInsertSubcategoriesResult;
}

const insertSubcategoriesIR: any = {"name":"InsertSubcategories","params":[{"name":"subcategories","codeRefs":{"defined":{"a":40,"b":52,"line":3,"col":9},"used":[{"a":147,"b":159,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":["id","name","category_id"]}}],"usedParamSet":{"subcategories":true},"statement":{"body":"INSERT INTO subcategories (id, name, category_id)\nVALUES :subcategories RETURNING *","loc":{"a":89,"b":171,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO subcategories (id, name, category_id)
 * VALUES :subcategories RETURNING *
 * ```
 */
export const insertSubcategories = new PreparedQuery<IInsertSubcategoriesParams,IInsertSubcategoriesResult>(insertSubcategoriesIR);


/** 'FindAllSubcategories' parameters type */
export interface IFindAllSubcategoriesParams {
  limit: string | null | void;
}

/** 'FindAllSubcategories' return type */
export interface IFindAllSubcategoriesResult {
  id: number;
  name: string | null;
  category_id: number | null;
  category_name: string | null;
}

/** 'FindAllSubcategories' query type */
export interface IFindAllSubcategoriesQuery {
  params: IFindAllSubcategoriesParams;
  result: IFindAllSubcategoriesResult;
}

const findAllSubcategoriesIR: any = {"name":"FindAllSubcategories","params":[{"name":"limit","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":320,"b":324,"line":12,"col":7}]}}],"usedParamSet":{"limit":true},"statement":{"body":"SELECT s.*, c.name as category_name\nFROM subcategories s\nLEFT JOIN categories c ON c.id = s.category_id \nLIMIT :limit","loc":{"a":208,"b":324,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT s.*, c.name as category_name
 * FROM subcategories s
 * LEFT JOIN categories c ON c.id = s.category_id 
 * LIMIT :limit
 * ```
 */
export const findAllSubcategories = new PreparedQuery<IFindAllSubcategoriesParams,IFindAllSubcategoriesResult>(findAllSubcategoriesIR);


