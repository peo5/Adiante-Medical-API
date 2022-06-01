import { Module } from '@nestjs/common';
import { MedicController } from './medic.controller';
import { MedicService } from './medic.service';

@Module({
  controllers: [MedicController],
  providers: [MedicService]
})
export class MedicModule {}

