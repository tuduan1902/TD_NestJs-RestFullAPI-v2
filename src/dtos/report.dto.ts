import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString } from 'class-validator';
import { Exclude, Expose } from 'class-transformer'; 
import { ReportType } from 'src/data';

export class CreateReportDto {
   @IsNumber()
   @IsPositive() // confirm this is a positive number
   amount: number;

   @IsString()
   @IsNotEmpty() 
   source: string;
}

export class UpdateReportDto {
   @IsOptional()
   @IsNumber()
   @IsPositive() 
   amount: number;

   @IsOptional()
   @IsString()
   @IsNotEmpty() 
   source: string;
}

export class ReportResponseDto {
   id: string;
   source: string;
   amount: number;
   created_at: Date;

   @Exclude() // Exclude certain properties inside class
   updated_at: Date;
   type: ReportType;

   constructor(partial: Partial<ReportResponseDto>) {
      Object.assign(this, partial);
   }
}