import { Controller, Get, Post, Put, Delete, Query, Param } from '@nestjs/common';
import { MedicService } from './medic.service';

@Controller('medic')
export class MedicController {
  constructor(private readonly medicService: MedicService) {}

	@Post() 
	createMedic(): object {
		return this.medicService.createMedic();
	}

	@Get()
	readAllMedic(@Query() query: any): object {
		return this.medicService.readAllMedics(query);
	}

	@Get('/:id')
	readOneMedic(@Param('id') id: string): object {
		return this.medicService.readOneMedic(id);
	}

	@Put(':id') 
	updateMedic(@Param('id') id: string): object {
		return this.medicService.updateMedic(id);
	}

	@Delete(':id') 
	deleteMedic(@Param('id') id: string): object {
		return this.medicService.deleteMedic(id);
	}
	 
}
