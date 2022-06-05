import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Medic } from './medics.entity';

import { CreateMedicDto } from './medics.create.dto';
import { UpdateMedicDto } from './medics.update.dto';

@Injectable()
export class MedicsService {

	constructor(
		@InjectRepository(Medic)
		private medicsRepository: Repository<Medic>
	) {}

	// TODO: Check if medic specialties match the possile values
	// TODO: Check if medic does not already exist

	async exists(id: string): Promise<boolean> {

		let medic = await this.medicsRepository.findOneBy({ crm: id });

		return medic !== null;

	}

	create(medic: CreateMedicDto): object {
		return this.medicsRepository.save(medic);
	}

	readAll(query: any): Promise<Medic[]> {
		return this.medicsRepository.find();
	}

	// TODO: Check if object exists on readOne, update and delete
	// TODO: Make a pipe to check this
	// TODO: Figure out how to send the error to the client 

	async readOne(id: string): Promise<Medic> {
		if(!await this.exists(id))
			throw `Medic with CRM ${id} does not exist`;
		return this.medicsRepository.findOneBy({ crm: id });
	}

	update(id: string, medic: UpdateMedicDto): object {

		return this.medicsRepository.update(id, medic);

	}

	async softDelete(id: string): Promise<void> {
		await this.medicsRepository.delete(id);
	}

}
