import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { SchoolRepository } from '../../repository/school.repository';
import { GetSchoolQuery } from '../impl';

@QueryHandler(GetSchoolQuery)
export class GetSchoolHandler implements IQueryHandler<GetSchoolQuery> {
  constructor(private readonly repository: SchoolRepository) {}

  async execute(query: GetSchoolQuery) {
    console.log('Async GetSchoolQuery...');
    return this.repository.findOneById(query.id);
  }
}
