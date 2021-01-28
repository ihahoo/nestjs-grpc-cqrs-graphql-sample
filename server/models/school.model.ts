import { AggregateRoot } from '@nestjs/cqrs';
import { UpdateSchoolNameEvent } from '../events/impl/updateSchoolName.event';

export class School extends AggregateRoot {
  constructor(
    private readonly id: number,
    private name: string,
    private address: string,
  ) {
    super();
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }

  updateName(name: string) {
    this.apply(new UpdateSchoolNameEvent(this.id, name));
  }
}
