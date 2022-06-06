import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller'; 
import { AppService } from './app.service';
import { MedicsModule } from './medics/medics.module';
import { Medic } from './medics/medics.entity';

@Module({
  imports: [
		ConfigModule.forRoot(),
		TypeOrmModule.forRootAsync({
      imports: [ConfigModule],      
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DATABASE_HOST') || 'localhost',
        port: parseInt(configService.get('DATABASE_PORT')) || 3306,
        username: configService.get('DATABASE_USER') || 'api_user',
        password: configService.get('DATABASE_PASSWORD') || 'api_pwd',
        database: configService.get('DATABASE_NAME') || 'medic_db',
				retryAttempts: 500,
				retryDelay: 5000,
				autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
		MedicsModule
	],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

