import { Injectable } from '@nestjs/common';

// TODO: separate medic class

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  getAlt(): string {
    return 'This is an alternative endpoint!';
  }

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
