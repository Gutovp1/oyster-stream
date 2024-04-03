import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { BatchesService } from './entities/batch/batch.service';
import { BatchesController } from './entities/batch/batch.controller';
import { Batch } from './entities/batch/batch';
import { Container } from './entities/container/container';
import { Longline } from './entities/longline/longline';
import { Marinefarm } from './entities/marine-farm/marine-farm';

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
  ],
  providers: [BatchesService],
  controllers: [BatchesController],
})
export class AppModule {}
