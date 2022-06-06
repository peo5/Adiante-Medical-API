import { ApiProperty } from '@nestjs/swagger'
import {
	Length,
	IsNotEmpty,
	IsNumberString,
	Matches,
	ArrayMinSize
} from 'class-validator' 

import { MedicSpecialty } from './medics.specialty.enum'

export class AddressDto {
	
	street: string
	complement: string
	area: string
	city: string
	state: string

}

// export class MedicAddressDto {
	
	// crm: string 
	// name: string 
	// telephone: string 
	// cellphone: string

	// cep: string
	// street: string
	// complement: string
	// area: string
	// city: string
	// state: string

	// specialty: MedicSpecialty[]

// }
