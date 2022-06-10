import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { data, ReportType } from 'src/data';

@Controller('report/:type')
export class AppController {
  @Get()
  getAllReports(@Param('type') type: string) {
    const reportType = type === 'income' ? ReportType.INCOME : ReportType.EXPENSE
    return data.report.filter((report) => report.type === reportType);
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


