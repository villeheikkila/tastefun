/** Types generated for queries found in "src/companies/companies.sql" */
import { PreparedQuery } from '@pgtyped/query';

/** 'InsertCompanies' parameters type */
export interface IInsertCompaniesParams {
  companies: readonly ({
    id: number | null | void,
    name: string | null | void
  })[];
}

/** 'InsertCompanies' return type */
export interface IInsertCompaniesResult {
  id: number;
  name: string | null;
}

/** 'InsertCompanies' query type */
export interface IInsertCompaniesQuery {
  params: IInsertCompaniesParams;
  result: IInsertCompaniesResult;
}

const insertCompaniesIR: any = {"name":"InsertCompanies","params":[{"name":"companies","codeRefs":{"defined":{"a":36,"b":44,"line":3,"col":9},"used":[{"a":109,"b":117,"line":6,"col":8}]},"transform":{"type":"pick_array_spread","keys":["id","name"]}}],"usedParamSet":{"companies":true},"statement":{"body":"INSERT INTO companies (id, name)\nVALUES :companies RETURNING *","loc":{"a":68,"b":129,"line":5,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * INSERT INTO companies (id, name)
 * VALUES :companies RETURNING *
 * ```
 */
export const insertCompanies = new PreparedQuery<IInsertCompaniesParams,IInsertCompaniesResult>(insertCompaniesIR);


/** 'FindAllCompanies' parameters type */
export interface IFindAllCompaniesParams {
  limit: string | null | void;
}

/** 'FindAllCompanies' return type */
export interface IFindAllCompaniesResult {
  id: number;
  name: string | null;
}

/** 'FindAllCompanies' query type */
export interface IFindAllCompaniesQuery {
  params: IFindAllCompaniesParams;
  result: IFindAllCompaniesResult;
}

const findAllCompaniesIR: any = {"name":"FindAllCompanies","params":[{"name":"limit","transform":{"type":"scalar"},"codeRefs":{"used":[{"a":194,"b":198,"line":11,"col":7}]}}],"usedParamSet":{"limit":true},"statement":{"body":"SELECT *\nFROM companies \nLIMIT :limit","loc":{"a":162,"b":198,"line":9,"col":0}}};

/**
 * Query generated from SQL:
 * ```
 * SELECT *
 * FROM companies 
 * LIMIT :limit
 * ```
 */
export const findAllCompanies = new PreparedQuery<IFindAllCompaniesParams,IFindAllCompaniesResult>(findAllCompaniesIR);


