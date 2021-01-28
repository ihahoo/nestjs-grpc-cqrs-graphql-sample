import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['./client/**/*.graphql'],
  path: join(process.cwd(), 'client/graphql.schema.ts'),
  outputAs: 'class',
});
