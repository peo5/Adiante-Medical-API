import { Controller, Get, Post, Put, Delete, Param, Query, Body } from '@nestjs/common'

import { CreateMedicDto } from './medics.create.dto'
import { UpdateMedicDto } from './medics.update.dto'
import { FilterMedicsDto } from './medics.filter.dto'
import { MedicsService } from './medics.service' 

@Controller('medics')
export class MedicsController {
  constructor(private readonly medicsService: MedicsService) {}

	@Post() 
	create(@Body() medic: CreateMedicDto): object {
		return this.medicsService.create(medic);
	}

	@Get()
	readAll(@Query() filter: FilterMedicsDto): object {
		return this.medicsService.readAll(filter);
	}

	@Get('/:crm')
	readOne(@Param('crm') crm: string): object {
		return this.medicsService.readOne(crm);
	}

	@Put(':crm') 
	update(@Param('crm') crm: string, @Body() medic: UpdateMedicDto): object {
		return this.medicsService.update(crm, medic);
	}

	@Delete(':crm') 
	softDelete(@Param('crm') crm: string): object {
		return this.medicsService.softDelete(crm);
	}
	 
}
