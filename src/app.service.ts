import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { ReportType, data } from './data';
import { ReportResponseDto } from './dtos/report.dto';

interface ReportData {
  amount: number;
  source: string;
}

interface UpdateReportData {
  amount: number;
  source: string;
}

@Injectable()
export class AppService {
  getAllReports(type: ReportType): ReportResponseDto[] {
    return data.report
      .filter((report) => report.type === type)
      .map((report) => new ReportResponseDto(report));
  }

  getReportById(type: ReportType, id: string): ReportResponseDto {
    /**
     * personal logic
     *  return data.report.find(
      (report) => report.type === reportType && report.id === id);
     */

    const report = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!report) return;

    // return report

    return new ReportResponseDto(report);
  }

  createReport(
    type: ReportType,
    { amount, source }: ReportData,
  ): ReportResponseDto {
    const newReport = {
      id: uuid(),
      source,
      amount,
      created_At: new Date(),
      updated_At: new Date(),
      type,
    };

    data.report.push(newReport);

    return new ReportResponseDto(newReport);
  }

  updateReport(
    type: ReportType,
    id: string,
    body: UpdateReportData,
  ): ReportResponseDto {
    /**
     * personal logic
     *  return data.report.find(
      (report) => report.type === reportType && report.id === id);
     */

    const reportToUpdate = data.report
      .filter((report) => report.type === type)
      .find((report) => report.id === id);

    if (!reportToUpdate) return;

    const reportIndex = data.report.findIndex(
      (report) => report.id === reportToUpdate.id,
    );

    data.report[reportIndex] = {
      ...data.report[reportIndex],
      ...body,
      updated_At: new Date(),
    };

    // return data.report[reportIndex];
    return new ReportResponseDto(data.report[reportIndex]);
  }

  deleteReport(id: string) {
    const reportIndex = data.report.findIndex((report) => report.id === id);

    if (reportIndex === -1) return;

    data.report.splice(reportIndex, 1);

    return;
  }
}
