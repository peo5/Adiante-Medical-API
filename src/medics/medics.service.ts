import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { AddressService } from '../address/address.service';

import { Medic } from './medics.entity';

import { CreateMedicDto } from './medics.create.dto';
import { UpdateMedicDto } from './medics.update.dto';
import { FilterMedicsDto } from './medics.filter.dto'

@Injectable()
export class MedicsService {

	constructor(
		@InjectRepository(Medic)
		private medicsRepository: Repository<Medic>,
		private addressService: AddressService
	) {}

	async exists(crm: string): Promise<boolean> {

		let medic = await this.medicsRepository.findOneBy({ crm: crm });

		return medic !== null;

	} 

	async create(medic: CreateMedicDto): Promise<object> {

		if(await this.exists(medic.crm))
			throw new ConflictException(`Medic with CRM ${medic.crm} already exists`);

		const address = await this.addressService.getFromCep(medic.cep); 
		return this.medicsRepository.save({...medic, ...address, date_deleted: null});

	}

	readAll(filter: FilterMedicsDto): Promise<Medic[]> {

		let options = {}; 
		for(let key in filter)
			options[key] = Like(`%${filter[key]}%`);

		return this.medicsRepository.findBy(options);

	}

	async readOne(crm: string): Promise<Medic> {

		if(!await this.exists(crm))
			throw new NotFoundException(`Medic with CRM ${crm} does not exist`)

		return this.medicsRepository.findOneBy({ crm: crm });

	}

	async update(crm: string, medic: UpdateMedicDto): Promise<object> {

		if(!await this.exists(crm))
			throw new NotFoundException(`Medic with CRM ${crm} does not exist`)

		let address = {}; 

		if(medic.cep)
			address = await this.addressService.getFromCep(medic.cep); 

		return this.medicsRepository.update(crm, {...medic, ...address});

	}

	async softDelete(crm: string): Promise<object> {

		if(!await this.exists(crm))
			throw new NotFoundException(`Medic with CRM ${crm} does not exist`)

		return this.medicsRepository.softDelete(crm);

	}

}
