import { Injectable } from '@nestjs/common';
import { CreateOysterContainerDto } from './dto/create-oyster-container.dto';
import { UpdateOysterContainerDto } from './dto/update-oyster-container.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { OysterContainer } from '../../../entities/src/oyster-container.entity';

@Injectable()
export class OysterContainerService {
  // constructor(
  //   @InjectRepository(OysterContainer)
  //   private readonly oysterContainerRepository: Repository<OysterContainer>,
  // ) {}

  create(createOysterContainerDto: CreateOysterContainerDto) {
    return 'This action adds a new oysterContainer';
  }

  findAll() {
    return `This action returns all oysterContainer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} oysterContainer`;
  }

  update(id: number, updateOysterContainerDto: UpdateOysterContainerDto) {
    return `This action updates a #${id} oysterContainer`;
  }

  remove(id: number) {
    return `This action removes a #${id} oysterContainer`;
  }
}
