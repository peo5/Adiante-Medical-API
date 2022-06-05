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

export class UpdateMedicDto  {

	@ApiProperty({
		example: 'Paulo Silva Rocha',
		required: false,
	})
	@IsOptional()
	// @Matches(/^[a-zA-Z]*(\s[a-zA-Z]*)*$/)
	@IsNotEmpty()
	name: string

	@ApiProperty({
		example: '1123272455',
		required: false
	})
	@IsOptional()
	@IsNumberString()
	@Length(8, 15)
	telephone: string

	@ApiProperty({
		example: '5511934343434',
		required: false
	})
	@IsOptional()
	@IsNumberString()
	@Length(8, 15)
	cellphone: string

	@ApiProperty({
		example: '33464000',
		required: false
	})
	@IsOptional()
	@IsNumberString()
	@Length(8, 8)
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
	specialty: MedicSpecialty[]

}

