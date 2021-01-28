import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { School } from '../graphql.schema';
import { AppService } from '../app.service';

@Resolver('School')
export class SchoolResolver {
  constructor(private readonly appService: AppService) {}

  @Query('school')
  async school(@Args('id') id: number): Promise<School> {
    const data = await this.appService.get({ id }).toPromise();
    console.log(data);
    return data;
  }

  @Mutation('updateSchoolName')
  async update(
    @Args('updateSchoolNameInput') args: { id: number; name: string },
  ): Promise<School> {
    const data = await this.appService
      .setName({ id: args.id, name: args.name })
      .toPromise();
    console.log(data);
    return data;
  }
}
