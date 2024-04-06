import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Container, OysterType } from 'src/entities/container';

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

  // must ensure that "expected_maturation_at" does not contain a time component, but only date
  async findAllToday(): Promise<Container[]> {
    const today = new Date(); // 2024-04-05T00:00:00.000Z
    const formattedDate = today.toISOString().split('T')[0];

    const convertedDate = new Date(formattedDate);

    return this.containerRepository.find({
      where: { expected_maturation_at: convertedDate },
    });
  }
}
