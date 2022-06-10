import { Controller, Delete, Get, Post, Put } from '@nestjs/common'

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports() {
    return 'Load all report';
  }

  @Get(':id')
  getReportById() {
    return 'Thanks for report';
  }

  @Post()
  createReport() {
    return 'Created';
  }

  @Put(':id')
  updateReport() {
    return 'updated';
  }

  @Delete(':id')
  deleteReport() {
    return 'delete';
  }
}


