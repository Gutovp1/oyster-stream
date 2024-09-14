import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarineFarmController } from './marine-farm.controller';
import { MarineFarmService } from './marine-farm.service';
import { MarineFarm } from '@entities/marine-farm.entity';
import { OysterContainer } from '@entities/oyster-container.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MarineFarm, OysterContainer])],
  controllers: [MarineFarmController],
  providers: [MarineFarmService],
})
export class MarineFarmModule {}
