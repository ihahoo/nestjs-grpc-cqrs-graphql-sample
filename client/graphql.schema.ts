
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class UpdateSchoolNameInput {
    id: number;
    name: string;
}

export class School {
    id: number;
    name?: string;
    address?: string;
}

export abstract class IQuery {
    abstract school(id: number): School | Promise<School>;
}

export abstract class IMutation {
    abstract updateSchoolName(updateSchoolNameInput?: UpdateSchoolNameInput): School | Promise<School>;
}
