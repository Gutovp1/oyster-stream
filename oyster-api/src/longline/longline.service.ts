import { Injectable } from '@nestjs/common';
import { CreateLonglineDto } from './dto/create-longline.dto';
import { UpdateLonglineDto } from './dto/update-longline.dto';

@Injectable()
export class LonglineService {
  create(createLonglineDto: CreateLonglineDto) {
    return 'This action adds a new longline';
  }

  findAll() {
    return `This action returns all longline`;
  }

  findOne(id: number) {
    return `This action returns a #${id} longline`;
  }

  update(id: number, updateLonglineDto: UpdateLonglineDto) {
    return `This action updates a #${id} longline`;
  }

  remove(id: number) {
    return `This action removes a #${id} longline`;
  }
}
