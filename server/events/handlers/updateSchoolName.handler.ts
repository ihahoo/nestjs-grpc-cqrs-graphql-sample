import { IEventHandler } from '@nestjs/cqrs';
import { EventsHandler } from '@nestjs/cqrs/dist/decorators/events-handler.decorator';
import { UpdateSchoolNameEvent } from '../impl/updateSchoolName.event';
import { SchoolRepository } from '../../repository/school.repository';

@EventsHandler(UpdateSchoolNameEvent)
export class UpdateSchoolNameHandler
  implements IEventHandler<UpdateSchoolNameEvent> {
  constructor(private repository: SchoolRepository) {}

  handle(event: UpdateSchoolNameEvent) {
    this.repository.updateNameById(event.id, event.name);
    console.log('UpdateSchoolNameEvent...');
  }
}
