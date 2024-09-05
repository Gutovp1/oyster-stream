import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import {
  OysterContainer,
  OysterBatch,
  Longline,
  MarineFarm,
} from '@entities/index';
// } from '../../entities/dist';
import { OysterContainerModule } from './oyster-container/oyster-container.module';
import { MarineFarmModule } from './marine-farm/marine-farm.module';
import { LonglineModule } from './longline/longline.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [OysterContainer, OysterBatch, Longline, MarineFarm],
      // entities: [__dirname + '/../../entities/dist/*.js'],
      synchronize: true,
    }),
    OysterContainerModule,
    MarineFarmModule,
    LonglineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
