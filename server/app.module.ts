import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { QueryHandlers } from './queries/handlers';
import { SchoolRepository } from './repository/school.repository';
import { EventHandlers } from './events/handlers';
import { CommandHandlers } from './commands/handlers';

@Module({
  imports: [CqrsModule],
  controllers: [AppController],
  providers: [
    SchoolRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
  ],
})
export class AppModule {}
