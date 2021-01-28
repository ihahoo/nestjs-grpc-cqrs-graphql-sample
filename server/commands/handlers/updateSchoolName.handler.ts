import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { SchoolRepository } from '../../repository/school.repository';
import { UpdateSchoolNameCommand } from '../impl/updateSchoolName.command';

@CommandHandler(UpdateSchoolNameCommand)
export class UpdateSchoolName
  implements ICommandHandler<UpdateSchoolNameCommand> {
  constructor(
    private readonly repository: SchoolRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateSchoolNameCommand) {
    console.log('UpdateSchoolNameCommand...');

    const { id, name } = command;
    const school = this.publisher.mergeObjectContext(
      await this.repository.findOneById(id),
    );

    school.updateName(name);

    school.commit();
  }
}
