/** Types generated for queries found in "src/treats/treats.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'FindAllTreats' parameters type */
export interface IFindAllTreatsParams {
  limit: string | null | void;
}

/** 'FindAllTreats' return type */
export interface IFindAllTreatsResult {
  id: number;
  name: string | null;
  company_id: number | null;
  category_id: number | null;
  subcategory_id: number | null;
  category_name: string | null;
  subcategory_name: string | null;
}

/** 'FindAllTreats' query type */
export interface IFindAllTreatsQuery {
  params: IFindAllTreatsParams;
  result: IFindAllTreatsResult;
}

const findAllTreatsIR: any = {"name":"FindAllTreats","params":[{"name":"limit","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":215,"b":219,"line":6,"col":7}]}}],"usedParamSet":{"limit":true},"statement":{"body":"SELECT t.*, c.name as category_name, s.name as subcategory_name \nFROM treats t \nLEFT JOIN categories c ON c.id = t.category_id \nLEFT JOIN subcategories s ON s.id = t.subcategory_id \nLIMIT :limit","loc":{"a":26,"b":219,"line":2,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT t.*, c.name as category_name, s.name as subcategory_name 
 * FROM treats t 
 * LEFT JOIN categories c ON c.id = t.category_id 
 * LEFT JOIN subcategories s ON s.id = t.subcategory_id 
 * LIMIT :limit
 * ```
 */
export const findAllTreats = new PreparedQuery<IFindAllTreatsParams,IFindAllTreatsResult>(findAllTreatsIR);


/** 'FindTreatById' parameters type */
export interface IFindTreatByIdParams {
  treatId: number | null | void;
}

/** 'FindTreatById' return type */
export interface IFindTreatByIdResult {
  id: number;
  name: string | null;
  company_id: number | null;
  category_id: number | null;
  subcategory_id: number | null;
}

/** 'FindTreatById' query type */
export interface IFindTreatByIdQuery {
  params: IFindTreatByIdParams;
  result: IFindTreatByIdResult;
}

const findTreatByIdIR: any = {"name":"FindTreatById","params":[{"name":"treatId","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":283,"b":289,"line":10,"col":33}]}}],"usedParamSet":{"treatId":true},"statement":{"body":"SELECT * FROM treats WHERE id = :treatId","loc":{"a":250,"b":289,"line":10,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT * FROM treats WHERE id = :treatId
 * ```
 */
export const findTreatById = new PreparedQuery<IFindTreatByIdParams,IFindTreatByIdResult>(findTreatByIdIR);


/** 'InsertTreats' parameters type */
export interface IInsertTreatsParams {
  treats: readonly ({
    id: number | null | void,
    name: string | null | void,
    category_id: number | null | void,
    company_id: number | null | void,
    subcategory_id: number | null | void
  })[];
}

/** 'InsertTreats' return type */
export interface IInsertTreatsResult {
  treat_id: number;
}

/** 'InsertTreats' query type */
export interface IInsertTreatsQuery {
  params: IInsertTreatsParams;
  result: IInsertTreatsResult;
}

const insertTreatsIR: any = {"name":"InsertTreats","params":[{"name":"treats","codeRefs":{"defined":{"a":326,"b":331,"line":14,"col":9},"used":[{"a":475,"b":480,"line":17,"col":8}]},"transform":{"type":"pick_array_spread","keys":["id","name","category_id","company_id","subcategory_id"]}}],"usedParamSet":{"treats":true},"statement":{"body":"INSERT INTO treats (id, name, category_id, company_id, subcategory_id)\nVALUES :treats RETURNING id as treat_id","loc":{"a":396,"b":505,"line":16,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO treats (id, name, category_id, company_id, subcategory_id)
 * VALUES :treats RETURNING id as treat_id
 * ```
 */
export const insertTreats = new PreparedQuery<IInsertTreatsParams,IInsertTreatsResult>(insertTreatsIR);


/** 'GetTreatByCategory' parameters type */
export interface IGetTreatByCategoryParams {
  categoryName: string | null | void;
}

/** 'GetTreatByCategory' return type */
export interface IGetTreatByCategoryResult {
  id: number;
  name: string | null;
  company_id: number | null;
  category_id: number | null;
  subcategory_id: number | null;
}

/** 'GetTreatByCategory' query type */
export interface IGetTreatByCategoryQuery {
  params: IGetTreatByCategoryParams;
  result: IGetTreatByCategoryResult;
}

const getTreatByCategoryIR: any = {"name":"GetTreatByCategory","params":[{"name":"categoryName","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":629,"b":640,"line":22,"col":16}]}}],"usedParamSet":{"categoryName":true},"statement":{"body":"SELECT b.* FROM treats b\nINNER JOIN categories a ON a.id = b.category_id\nWHERE a.name = :categoryName","loc":{"a":540,"b":640,"line":20,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT b.* FROM treats b
 * INNER JOIN categories a ON a.id = b.category_id
 * WHERE a.name = :categoryName
 * ```
 */
export const getTreatByCategory = new PreparedQuery<IGetTreatByCategoryParams,IGetTreatByCategoryResult>(getTreatByCategoryIR);


