import { Module } from '@nestjs/common';
import { LonglineService } from './longline.service';
import { LonglineController } from './longline.controller';

@Module({
  controllers: [LonglineController],
  providers: [LonglineService],
})
export class LonglineModule {}
