import { 
	Entity, 
	PrimaryColumn, 
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	DeleteDateColumn
} from 'typeorm'

/*
 * Nome do médico com no máximo 120 caractéres
 * CRM: somente números com no máximo 7 caracteres
 * Telefone fixo: somente números
 * Telefone celular: somente números
 * CEP: somente números (Ao cadastrar o CEP, deve ser feita uma reqisição via XHR para a API dos correios e retornar todos os dados de endereço do cliente).
 * Especialidade médica (mínimo de duas especialidades) 
 */

export enum MedicSpecialty {
	ALERGOLOGIA = 'Alergologia',
  ANGIOLOGIA = 'Angiologia',
  BUCO_MAXILIO = 'Buco maxilo',
  CARDIO_CLINICA = 'Cardiologia clínca',
  CARDIO_INFANTIL = 'Cardiologia infantil',
  CIRURGIA_CABECA_PESCOCO = 'Cirurgia cabeça e pescoço',
  CIRURGIA_CARDIACA = 'Cirurgia cardíaca',
  CIRURGIA_TORAX = 'Cirurgia de tórax'
}

@Entity()
export class Medic {

	@PrimaryColumn({ length: 7 })
	crm: string

	@Column({ length: 120 })
	name: string

	@Column({ length: 15 })
	telephone: string

	@Column({ length: 15 })
	cellphone: string

	@Column({ length: 8 })
	cep: string

	@Column({ type: 'set', enum: MedicSpecialty })
	specialty: MedicSpecialty[]

	@CreateDateColumn()
	date_created: Date

	@UpdateDateColumn()
	date_updated: Date
	
	@DeleteDateColumn()
	date_deleted: Date

}
