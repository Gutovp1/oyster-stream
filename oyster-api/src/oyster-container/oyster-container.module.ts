import { Module } from '@nestjs/common';
import { OysterContainerService } from './oyster-container.service';
import { OysterContainerController } from './oyster-container.controller';

@Module({
  controllers: [OysterContainerController],
  providers: [OysterContainerService],
})
export class OysterContainerModule {}
