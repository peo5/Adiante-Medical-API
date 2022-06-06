import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

import { map } from 'rxjs/operators';

import { Medic } from './medics.entity';

import { CreateMedicDto } from './medics.create.dto';
import { UpdateMedicDto } from './medics.update.dto';
import { AddressDto } from './medics.address.dto';

@Injectable()
export class MedicsService {

	constructor(
		@InjectRepository(Medic)
		private medicsRepository: Repository<Medic>,
		private httpService: HttpService
	) {}

	async exists(id: string): Promise<boolean> {

		let medic = await this.medicsRepository.findOneBy({ crm: id });

		return medic !== null;

	}

	async addressFromCep(cep: string): Promise<AddressDto> {

		return this.httpService
			.get( `https://viacep.com.br/ws/${cep}/json`,)
			.pipe(
				map((res: AxiosResponse<any, any>) => {

					const data = res.data;

					console.log(data);

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

	async create(medic: CreateMedicDto): Promise<object> {

		if(await this.exists(medic.crm))
			throw new ConflictException(`Medic with CRM ${medic.crm} already exists`);

		const address = await this.addressFromCep(medic.cep); 
		console.log(address);
		return this.medicsRepository.save({...medic, ...address});

	}

	readAll(query: any): Promise<Medic[]> {

		return this.medicsRepository.find();

	}

	async readOne(id: string): Promise<Medic> {

		if(!await this.exists(id))
			throw new NotFoundException(`Medic with CRM ${id} does not exist`)

		return this.medicsRepository.findOneBy({ crm: id });

	}

	async update(id: string, medic: UpdateMedicDto): Promise<object> {

		if(!await this.exists(id))
			throw new NotFoundException(`Medic with CRM ${id} does not exist`)

		return this.medicsRepository.update(id, medic);

	}

	async softDelete(id: string): Promise<void> {

		if(!await this.exists(id))
			throw new NotFoundException(`Medic with CRM ${id} does not exist`)

		await this.medicsRepository.delete(id);

	}

}
