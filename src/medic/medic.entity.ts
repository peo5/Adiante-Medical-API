import { Entity, PrimaryColumn, Column } from 'typeorm'

/*
 * Nome do médico com no máximo 120 caractéres
 * CRM: somente números com no máximo 7 caracteres
 * Telefone fixo: somente números
 * Telefone celular: somente números
 * CEP: somente números (Ao cadastrar o CEP, deve ser feita uma reqisição via XHR para a API dos correios e retornar todos os dados de endereço do cliente).
 * Especialidade médica (mínimo de duas especialidades) -> specialties will be identifyed by a relation
 */

@Entity()
export class Medic {

	@PrimaryColumn()
	crm: string

	@Column({ length: 120 })
	name: string

	@Column()
	telephone: string

	@Column()
	cellphone: string

	@Column()
	cep: string

}
