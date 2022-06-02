import { ApiProperty } from '@nestjs/swagger'
import {
	Length,
	IsNotEmpty,
	IsNumberString,
	IsAlpha,
	ArrayMinSize
} from 'class-validator' 

import { MedicSpecialty } from './medics.specialty.enum'

export class UpdateMedicDto  {

	@ApiProperty({
		required: false
	})
	@IsAlpha()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		required: false
	})
	@IsNumberString()
	@Length(8, 15)
	telephone: string

	@ApiProperty({
		required: false
	})
	@IsNumberString()
	@Length(8, 15)
	cellphone: string

	@ApiProperty({
		required: false
	})
	@IsNumberString()
	@Length(8, 8)
	cep: string

	@ApiProperty({ 
		type: Array, 
		items: { 
			enum: Object.values(MedicSpecialty) 
		}, 
		required: false
	})
	@ArrayMinSize(2)
	specialty: MedicSpecialty[]

}

