import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  School,
  GetSchoolRequest,
  SetSchoolNameRequest,
} from './app.interface';
import { GetSchoolQuery } from './queries/impl';
import { UpdateSchoolNameCommand } from './commands/impl/updateSchoolName.command';

@Controller()
export class AppController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @GrpcMethod('SchoolService', 'Get')
  async get(data: GetSchoolRequest): Promise<School> {
    return this.queryBus.execute(new GetSchoolQuery(data.id));
    // const items = [
    //   { id: 1, name: 'school1', address: 'school1 address' },
    //   { id: 2, name: 'school2', address: 'school2 address' },
    // ];

    // return items.find(({ id }) => id === data.id);
  }

  @GrpcMethod('SchoolService', 'SetName')
  async setName(data: SetSchoolNameRequest): Promise<School> {
    console.log(data);
    await this.commandBus.execute(
      new UpdateSchoolNameCommand(data.id, data.name),
    );
    return this.queryBus.execute(new GetSchoolQuery(data.id));
  }
}
