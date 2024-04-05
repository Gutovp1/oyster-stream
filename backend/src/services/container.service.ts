import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Container } from 'src/entities/container';

@Injectable()
export class ContainerService {
  constructor(
    @InjectRepository(Container)
    private readonly containerRepository: Repository<Container>,
  ) {}

  async findAll(sort: string, page: number): Promise<Container[]> {
    return this.containerRepository.find({
      order: {
        expected_maturation_at:
          sort === 'expected_maturation_at' ? 'ASC' : 'DESC',
      },
      skip: page * 10,
      take: 10,
    });
  }

  async findOne(containerId: number): Promise<Container> {
    return this.containerRepository.findOne({ where: { id: containerId } });
  }
}
