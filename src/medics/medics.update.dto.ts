import { ApiProperty } from '@nestjs/swagger'
import {
	IsOptional,
	Length,
	IsNotEmpty,
	IsNumberString,
	Matches,
	ArrayMinSize
} from 'class-validator' 

import { MedicSpecialty } from './medics.specialty.enum'
import { IsMedicSpecialtyArray } from './medics.specialty.validator'

export class UpdateMedicDto  {

	@ApiProperty({
		example: 'Paulo Silva Rocha',
		required: false,
	})
	@IsOptional()
	@IsNotEmpty()
	name: string

	@ApiProperty({
		example: '1123272455',
		required: false
	})
	@IsOptional()
	@Length(8, 15)
	@IsNumberString()
	telephone: string

	@ApiProperty({
		example: '5511934343434',
		required: false
	})
	@IsOptional()
	@Length(8, 15)
	@IsNumberString()
	cellphone: string

	@ApiProperty({
		example: '33464000',
		required: false
	})
	@IsOptional()
	@Length(8, 8)
	@IsNumberString()
	cep: string

	@ApiProperty({ 
		type: Array, 
		items: { 
			enum: Object.values(MedicSpecialty) 
		}, 
		example: ['Alergologia', 'Angiologia'],
		required: false
	})
	@IsOptional()
	@ArrayMinSize(2)
	@IsMedicSpecialtyArray()
	specialties: MedicSpecialty[]

}

