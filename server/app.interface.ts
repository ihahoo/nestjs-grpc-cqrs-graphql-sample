export interface School {
  id: number;
  name: string;
  address: string;
}

export interface GetSchoolRequest {
  id: number;
}

export interface SetSchoolNameRequest {
  id: number;
  name: string;
}
