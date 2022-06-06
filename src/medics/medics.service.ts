import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { map } from 'rxjs/operators';

import { Medic } from './medics.entity';

import { CreateMedicDto } from './medics.create.dto';
import { UpdateMedicDto } from './medics.update.dto';
import { FilterMedicsDto } from './medics.filter.dto'
import { AddressDto } from './medics.address.dto';

@Injectable()
export class MedicsService {

	constructor(
		@InjectRepository(Medic)
		private medicsRepository: Repository<Medic>,
		private httpService: HttpService
	) {}

	async addressFromCep(cep: string): Promise<AddressDto> {

		return this.httpService
			.get( `https://viacep.com.br/ws/${cep}/json`,)
			.pipe(
				map((res: AxiosResponse<any, any>) => {

					const data = res.data;

					if(!data.cep)
						throw new BadRequestException(`Invalid CEP: ${cep}`);

					return {
						street: data.logradouro,
						area: data.bairro,
						city: data.localidade,
						state: data.uf,
						complement: data.complemento, 
					}

				})
			)
			.toPromise();

	}

	async exists(crm: string): Promise<boolean> {

		let medic = await this.medicsRepository.findOneBy({ crm: crm });

		return medic !== null;

	} 

	async create(medic: CreateMedicDto): Promise<object> {

		if(await this.exists(medic.crm))
			throw new ConflictException(`Medic with CRM ${medic.crm} already exists`);

		const address = await this.addressFromCep(medic.cep); 
		return this.medicsRepository.save({...medic, ...address, date_deleted: null});

	}

	readAll(filter: FilterMedicsDto): Promise<Medic[]> {

		let options = {}; 
		for(let key in filter)
			options[key] = Like(`%${filter[key]}%`);

		console.log('filter', filter);

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

		return this.medicsRepository.update(crm, medic);

	}

	async softDelete(crm: string): Promise<object> {

		if(!await this.exists(crm))
			throw new NotFoundException(`Medic with CRM ${crm} does not exist`)

		return this.medicsRepository.softDelete(crm);

	}

}
