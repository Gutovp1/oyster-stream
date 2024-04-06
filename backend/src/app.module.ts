import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { OysterService } from './services/oyster.service';
import { OysterController } from './controller/oyster.controller';
import { Batch } from './entities/batch';
import { Container } from './entities/container';
import { Longline } from './entities/longline';
import { Marinefarm } from './entities/marine-farm';
import { ContainerService } from './services/container.service';
import { LonglineService } from './services/longline.service';
import { MarineFarmService } from './services/marine-farm.service';
import { ContainerController } from './controller/container.controller';
import { LonglineController } from './controller/longline.controller';
import { MarineFarmController } from './controller/marine-farm.controller';

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
      entities: [Batch, Container, Longline, Marinefarm],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Container]),
  ],
  providers: [
    OysterService,
    ContainerService,
    LonglineService,
    MarineFarmService,
  ],
  controllers: [
    OysterController,
    ContainerController,
    LonglineController,
    MarineFarmController,
  ],
})
export class AppModule {}
