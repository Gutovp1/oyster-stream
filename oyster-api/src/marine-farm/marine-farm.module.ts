import { Module } from '@nestjs/common';
import { MarineFarmService } from './marine-farm.service';
import { MarineFarmController } from './marine-farm.controller';
import { MarineFarm } from '@entities/marine-farm.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([MarineFarm])],
  controllers: [MarineFarmController],
  providers: [MarineFarmService],
})
export class MarineFarmModule {}
