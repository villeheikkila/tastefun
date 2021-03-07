/** Types generated for queries found in "src/categories/categories.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertCategories' parameters type */
export interface IInsertCategoriesParams {
  categories: readonly ({
    id: number | null | void,
    name: string | null | void
  })[];
}

/** 'InsertCategories' return type */
export interface IInsertCategoriesResult {
  id: number;
  name: string | null;
}

/** 'InsertCategories' query type */
export interface IInsertCategoriesQuery {
  params: IInsertCategoriesParams;
  result: IInsertCategoriesResult;
}

const insertCategoriesIR: any = {"name":"InsertCategories","params":[{"name":"categories","codeRefs":{"defined":{"a":37,"b":46,"line":3,"col":9},"used":[{"a":112,"b":121,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":["id","name"]}}],"usedParamSet":{"categories":true},"statement":{"body":"INSERT INTO categories (id, name)\nVALUES :categories RETURNING *","loc":{"a":70,"b":133,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO categories (id, name)
 * VALUES :categories RETURNING *
 * ```
 */
export const insertCategories = new PreparedQuery<IInsertCategoriesParams,IInsertCategoriesResult>(insertCategoriesIR);


/** 'FindAllCategories' parameters type */
export interface IFindAllCategoriesParams {
  limit: string | null | void;
}

/** 'FindAllCategories' return type */
export interface IFindAllCategoriesResult {
  id: number;
  name: string | null;
}

/** 'FindAllCategories' query type */
export interface IFindAllCategoriesQuery {
  params: IFindAllCategoriesParams;
  result: IFindAllCategoriesResult;
}

const findAllCategoriesIR: any = {"name":"FindAllCategories","params":[{"name":"limit","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":200,"b":204,"line":11,"col":7}]}}],"usedParamSet":{"limit":true},"statement":{"body":"SELECT *\nFROM categories \nLIMIT :limit","loc":{"a":167,"b":204,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM categories 
 * LIMIT :limit
 * ```
 */
export const findAllCategories = new PreparedQuery<IFindAllCategoriesParams,IFindAllCategoriesResult>(findAllCategoriesIR);


