import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';
import { MedicModule } from './medic/medic.module';

@Module({
  imports: [
		// TypeOrmModule.forRoot({
			// type: 'mysql',
			// host: 'localhost',
			// port: 3306,
			// username: 'api_user',
			// password: 'api_pwd',
			// database: 'medics',
			// entities: ['medic.entity.ts'],
			// synchronize: true,
		// }),
		MedicModule
	],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

