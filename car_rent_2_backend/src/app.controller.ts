import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('cars')
  getCars() {
    return this.appService.getCars();
  }

  @Get('rent')
  getRent() {
    return this.appService.getRent();
  }
}
