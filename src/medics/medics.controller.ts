import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common'

import { CreateMedicDto } from './medics.create.dto'
import { UpdateMedicDto } from './medics.update.dto'
import { MedicsService } from './medics.service' 

@Controller('medics')
export class MedicsController {
  constructor(private readonly medicsService: MedicsService) {}

	@Post() 
	create(@Body() medic: CreateMedicDto): object {
		return this.medicsService.create();
	}

	@Get()
	readAll(@Query() query: any): object {
		return this.medicsService.readAll(query);
	}

	@Get('/:id')
	readOne(@Param('id') id: string): object {
		return this.medicsService.readOne(id);
	}

	@Put(':id') 
	update(@Body() medic: UpdateMedicDto, @Param('id') id: string): object {
		return this.medicsService.update(id);
	}

	@Delete(':id') 
	softDelete(@Param('id') id: string): object {
		return this.medicsService.softDelete(id);
	}
	 
}
