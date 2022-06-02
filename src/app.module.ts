import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller'; 
import { AppService } from './app.service';
import { MedicsModule } from './medics/medics.module';
import { Medic } from './medics/medics.entity';

@Module({
  imports: [
		TypeOrmModule.forRoot({
			type: 'mysql',
			host: 'localhost',
			port: 3306,
			username: 'api_user',
			password: 'api_pwd',
			database: 'medics',
			autoLoadEntities: true,
			synchronize: true,
		}),
		MedicsModule
	],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

