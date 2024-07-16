import { Injectable } from '@nestjs/common';
import { CreateMarineFarmDto } from './dto/create-marine-farm.dto';
import { UpdateMarineFarmDto } from './dto/update-marine-farm.dto';

@Injectable()
export class MarineFarmService {
  create(createMarineFarmDto: CreateMarineFarmDto) {
    return 'This action adds a new marineFarm';
  }

  findAll() {
    return `This action returns all marineFarm`;
  }

  findOne(id: number) {
    return `This action returns a #${id} marineFarm`;
  }

  update(id: number, updateMarineFarmDto: UpdateMarineFarmDto) {
    return `This action updates a #${id} marineFarm`;
  }

  remove(id: number) {
    return `This action removes a #${id} marineFarm`;
  }
}
