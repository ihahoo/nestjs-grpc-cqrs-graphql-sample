import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { SchoolService } from './interfaces/school-service.interface';
import {
  School,
  GetSchoolRequest,
  SetSchoolNameRequest,
} from './interfaces/app.interface';

@Injectable()
export class AppService implements OnModuleInit {
  private schoolService: SchoolService;

  constructor(@Inject('SCHOOL_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.schoolService = this.client.getService<SchoolService>('SchoolService');
  }

  get(data: GetSchoolRequest): Observable<School> {
    return this.schoolService.get(data);
  }

  setName(data: SetSchoolNameRequest): Observable<School> {
    console.log(data);
    return this.schoolService.setName(data);
  }
}
