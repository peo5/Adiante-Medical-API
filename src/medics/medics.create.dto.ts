import { ApiProperty } from '@nestjs/swagger'
import {
	Length,
	IsNotEmpty,
	IsNumberString,
	Matches,
	ArrayMinSize
} from 'class-validator' 

import { MedicSpecialty } from './medics.specialty.enum'

export class CreateMedicDto {
	
	@ApiProperty({
		example: '1234567',
	})
	@IsNumberString()
	@Length(1, 7)
	crm: string
	
	@ApiProperty({
		example: 'Paulo Rocha',
	})
	@IsNotEmpty()
	name: string

	@ApiProperty({
		example: '1123272455',
	})
	@IsNumberString()
	@Length(8, 15)
	telephone: string

	@ApiProperty({
		example: '5511934343434',
	})
	@IsNumberString()
	@Length(8, 15)
	cellphone: string

	@ApiProperty({
		example: '03314000',
	})
	@IsNumberString()
	@Length(8, 8)
	cep: string

	@ApiProperty({ 
		type: Array, 
		items: { 
			enum: Object.values(MedicSpecialty) 
		}, 
		example: ['Alergologia', 'Angiologia'],
	})
	@ArrayMinSize(2)
	specialty: MedicSpecialty[]

}
