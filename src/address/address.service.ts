import { Injectable, BadRequestException, ConflictException, NotFoundException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

import { map } from 'rxjs/operators';

import { AddressDto } from './address.dto';

@Injectable()
export class AddressService {

	constructor(
		private httpService: HttpService
	) {}

	async getFromCep(cep: string): Promise<AddressDto> {

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

}
