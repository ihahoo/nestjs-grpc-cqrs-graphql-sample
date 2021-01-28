import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: 'localhost:50051',
        package: 'school',
        protoPath: join(__dirname, './school.proto'),
      },
    },
  );

  await app.listen(() => {
    console.log('service has started');
  });
}
bootstrap();
