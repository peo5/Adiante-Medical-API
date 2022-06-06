import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator' 

// import { PartialType } from '@nestjs/mapped-types';

// import { Medic } from './medics.entity';

// export class FilterMedicsDto extends PartialType(Medic) {}

export class FilterMedicsDto { 
	
	@ApiProperty({ required: false })
	@IsOptional()
	crm: string 

	@ApiProperty({ required: false })
	@IsOptional()
	name: string 
	
	@ApiProperty({ required: false })
	@IsOptional()
	telephone: string 

	@ApiProperty({ required: false })
	@IsOptional()
	cellphone: string 

	@ApiProperty({ required: false })
	@IsOptional()
	cep: string 

	@ApiProperty({ required: false })
	@IsOptional()
	street: string

	@ApiProperty({ required: false })
	@IsOptional()
	complement: string

	@ApiProperty({ required: false })
	@IsOptional()
	area: string
	
	@ApiProperty({ required: false })
	@IsOptional()
	city: string

	@ApiProperty({ required: false })
	@IsOptional()
	state: string

	// specialty: MedicSpecialty[]
	
}
