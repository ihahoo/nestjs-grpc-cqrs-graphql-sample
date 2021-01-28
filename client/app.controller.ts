import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/schools')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:id')
  async get(@Param('id') id: number): Promise<any> {
    const data = await this.appService.get({ id }).toPromise();
    console.log(data);
    return data;
  }

  @Put('/:id')
  async setName(
    @Param('id') id: number,
    @Body() body: { name: string },
  ): Promise<any> {
    const data = await this.appService
      .setName({ id, name: body.name })
      .toPromise();
    console.log(data);
    return data;
  }
}
