import { Controller, Get, Post, Put, Delete, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';

// TODO: separate medic controller 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

	// Some nonsense here

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

	@Get('alt')
	getAlt(): string {
		return this.appService.getAlt();
	}

	// Actual medics controllers

	@Post('medics') 
	createMedic(): object {
		return this.appService.createMedic();
	}

	@Get('medics')
	readAllMedics(@Query() query: any): object {
		return this.appService.readAllMedics(query);
	}

	@Get('medics/:id')
	readOneMedic(@Param('id') id: string): object {
		return this.appService.readOneMedic(id);
	}

	@Put('medics/:id') 
	updateMedic(@Param('id') id: string): object {
		return this.appService.updateMedic(id);
	}

	@Delete('medics/:id') 
	deleteMedic(@Param('id') id: string): object {
		return this.appService.deleteMedic(id);
	}
	 
}
