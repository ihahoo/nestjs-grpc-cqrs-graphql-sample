import { Injectable } from '@nestjs/common';
import { School } from '../models/school.model';
import { school1, school2 } from './fixtures/schools';

@Injectable()
export class SchoolRepository {
  async findOneById(id: number): Promise<School> {
    if (id === 1) return school1;
    if (id === 2) return school2;
  }

  async findAll(): Promise<School[]> {
    return [school1, school2];
  }

  async updateNameById(id: number, name: string): Promise<void> {
    if (id === 1) school1.setName(name);
    if (id === 2) school2.setName(name);
  }
}
