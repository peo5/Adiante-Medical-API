import { Controller, Get, Post, Put, Delete, Query, Param } from '@nestjs/common';
import { MedicsService } from './medics.service';

@Controller('medics')
export class MedicsController {
  constructor(private readonly medicsService: MedicsService) {}

	@Post() 
	create(): object {
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
	update(@Param('id') id: string): object {
		return this.medicsService.update(id);
	}

	@Delete(':id') 
	softDelete(@Param('id') id: string): object {
		return this.medicsService.softDelete(id);
	}
	 
}
