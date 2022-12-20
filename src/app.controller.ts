import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/v1/report/:type')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllRepors() {
    return [];
  }

  @Get(':id')
  getReportById(): Object {
    return {};
  }

  @Post()
  createReport() {
    return 'created';
  }
  @Put(':id')
  updateReportById() {
    return 'updated';
  }

  @Delete(':id')
  deleteReportById() {
    return 'deleted';
  }
}
