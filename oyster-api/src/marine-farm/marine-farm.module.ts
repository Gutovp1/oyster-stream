import { Module } from '@nestjs/common';
import { MarineFarmService } from './marine-farm.service';
import { MarineFarmController } from './marine-farm.controller';

@Module({
  controllers: [MarineFarmController],
  providers: [MarineFarmService],
})
export class MarineFarmModule {}
