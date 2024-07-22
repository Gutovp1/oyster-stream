import { Module } from '@nestjs/common';
import { OysterContainerService } from './oyster-container.service';
import { OysterContainerController } from './oyster-container.controller';
import { OysterContainer } from '../../../entities/src/oyster-container.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([OysterContainer])],
  controllers: [OysterContainerController],
  providers: [OysterContainerService],
})
export class OysterContainerModule {}
