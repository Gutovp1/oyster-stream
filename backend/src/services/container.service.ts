import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Container } from 'src/entities/container';

@Injectable()
export class ContainerService {
  constructor(
    @InjectRepository(Container)
    private readonly containerRepository: Repository<Container>,
  ) {}

  async findAll(
    sort: string = 'expected_maturation_at',
    page: number = 0,
  ): Promise<Container[]> {
    return this.containerRepository.find({
      order: {
        expected_maturation_at:
          sort === 'expected_maturation_at' ? 'ASC' : 'DESC',
      },
      skip: page * 10,
      take: 10,
    });
  }

  async findOne(containerId: number = 1): Promise<Container> {
    const container = this.containerRepository.findOne({
      where: { id: containerId },
    });
    console.log('container ', container);
    if (!container) {
      throw new NotFoundException('Container not found. Try again.');
    }
    return container;
  }

  async findAllToday(): Promise<Container[]> {
    const today = new Date(); // 2024-04-05T00:00:00.000Z
    const formattedDate = today.toISOString().split('T')[0];
    const convertedDate = new Date(formattedDate);

    return this.containerRepository.find({
      where: { expected_maturation_at: convertedDate },
    });
  }
}
