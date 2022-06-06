import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MedicsController } from './medics.controller';
import { MedicsService } from './medics.service';
import { Medic } from './medics.entity';

@Module({
	imports: [HttpModule,TypeOrmModule.forFeature([Medic])],
  controllers: [MedicsController],
  providers: [MedicsService],
	exports: [TypeOrmModule]
})
export class MedicsModule {}

