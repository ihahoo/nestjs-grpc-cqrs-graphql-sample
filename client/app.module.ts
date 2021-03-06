import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SchoolResolver } from './school/school.resolver';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SCHOOL_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:50051',
          package: 'school',
          protoPath: join(__dirname, './school.proto'),
        },
      },
    ]),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      // definitions: {
      //   path: join(process.cwd(), 'client/graphql.ts'),
      //   outputAs: 'class',
      // },
    }),
  ],
  controllers: [AppController],
  providers: [AppService, SchoolResolver],
})
export class AppModule {}
