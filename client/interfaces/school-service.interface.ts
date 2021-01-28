import { Observable } from 'rxjs';
import {
  School,
  GetSchoolRequest,
  SetSchoolNameRequest,
} from './app.interface';

export interface SchoolService {
  get(data: GetSchoolRequest): Observable<School>;
  setName(data: SetSchoolNameRequest): Observable<School>;
}
