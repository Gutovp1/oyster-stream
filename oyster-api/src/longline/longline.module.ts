import { Module } from '@nestjs/common';
import { LonglineService } from './longline.service';
import { LonglineController } from './longline.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Longline } from '@entities/longline.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Longline])],
  controllers: [LonglineController],
  providers: [LonglineService],
})
export class LonglineModule {}
