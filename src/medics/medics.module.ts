import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AddressModule } from '../address/address.module';

import { MedicsController } from './medics.controller';
import { MedicsService } from './medics.service';
import { Medic } from './medics.entity';

@Module({
	imports: [AddressModule, TypeOrmModule.forFeature([Medic])],
  controllers: [MedicsController],
  providers: [MedicsService],
	exports: [TypeOrmModule],
})
export class MedicsModule {}

