import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Medic } from './medics.entity';

@Injectable()
export class MedicsService {

	constructor(
		@InjectRepository(Medic)
		private medicsRepository: Repository<Medic>
	) {}

	create(): object {
		return { message: 'medic created, trust me' };
	}

	readAll(query: any): Promise<Medic[]> {
		return this.medicsRepository.find();
	}

	readOne(id: string): Promise<Medic> {
		return this.medicsRepository.findOne({ where: { crm: id } });
	}

	update(id: string): object {
		return { message: 'medic updated, trust me' };
	}

	async softDelete(id: string): Promise<void> {
		await this.medicsRepository.delete(id);
	}

}
