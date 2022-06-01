import { Injectable } from '@nestjs/common';

@Injectable()
export class MedicService {

	createMedic(): object {
		return { message: 'medic created, trust me' };
	}

	readAllMedics(query: any): object {
		return { query: query, medics: ['medic1', 'medic2'] };
	}

	readOneMedic(id: string): object {
		return { name: `medic #${id}` };
	}

	updateMedic(id: string): object {
		return { message: 'medic updated, trust me' };
	}

	deleteMedic(id: string): object {
		return { message: 'medic deleted, trust me' };
	}

}
