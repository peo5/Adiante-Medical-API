import {DataSource} from 'typeorm'

export const dataSource = new DataSource({
	type: 'mysql',
	host: 'localhost',
	port: 3306,
	username: 'api_user',
	password: 'api_pwd',
	database: 'medics',
	entities: ['./entity/*.ts'],
	synchronize: true,
})

