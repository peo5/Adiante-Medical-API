import { ApiProperty } from '@nestjs/swagger'
import {
	Length,
	IsNotEmpty,
	IsNumberString,
	IsAlpha,
	ArrayMinSize
} from 'class-validator' 

import { MedicSpecialty } from './medics.specialty.enum'

export class CreateMedicDto {
	
	@ApiProperty()
	@IsNumberString()
	@Length(1, 7)
	crm: string
	
	@ApiProperty()
	@IsAlpha()
	@IsNotEmpty()
	name: string

	@ApiProperty()
	@IsNumberString()
	@Length(8, 15)
	telephone: string

	@ApiProperty()
	@IsNumberString()
	@Length(8, 15)
	cellphone: string

	@ApiProperty()
	@IsNumberString()
	@Length(8, 8)
	cep: string

	@ApiProperty({ 
		type: Array, 
		items: { 
			type: 'string', 
			enum: Object.values(MedicSpecialty) 
		} 
	})
	@ArrayMinSize(2)
	specialty: MedicSpecialty[]

}
