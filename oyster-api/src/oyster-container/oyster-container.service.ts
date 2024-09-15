import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateOysterContainerDto } from './dto/create-oyster-container.dto';
import { UpdateOysterContainerDto } from './dto/update-oyster-container.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OysterContainer, OysterType } from '@entities/oyster-container.entity';

@Injectable()
export class OysterContainerService {
  constructor(
    @InjectRepository(OysterContainer)
    private readonly oysterContainerRepository: Repository<OysterContainer>,
  ) {}

  async findAll(
    sort: string = 'expected_maturation_at',
    page: number = 0,
  ): Promise<OysterContainer[]> {
    return this.oysterContainerRepository.find({
      order: {
        expected_maturation_at:
          sort === 'expected_maturation_at' ? 'ASC' : 'DESC',
      },
      skip: page * 10,
      take: 10,
    });
  }

  async findOne(containerId: number = 1): Promise<OysterContainer> {
    const container = this.oysterContainerRepository.findOne({
      where: { id: containerId },
    });
    console.log('container ', container);
    if (!container) {
      throw new NotFoundException('Container not found. Try again.');
    }
    return container;
  }

  async findAllToday(): Promise<OysterContainer[]> {
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    const convertedDate = new Date(formattedDate);

    return this.oysterContainerRepository.find({
      where: { expected_maturation_at: convertedDate },
    });
  }

  async findAllOystersToMature(type: OysterType): Promise<
    {
      oyster_quantity: number[];
      expected_maturation_at: Date;
      oyster_batch_number: number;
    }[]
  > {
    const containers = await this.oysterContainerRepository.find({
      where: { oyster_type: type },
      relations: ['oyster_batch'],
    });
    return containers.map((container) => ({
      oyster_quantity: container.oyster_quantity,
      expected_maturation_at: container.expected_maturation_at,
      oyster_batch_number: container.oyster_batch.oyster_batch_number,
    }));
  }

  async create(
    createOysterContainerDto: CreateOysterContainerDto,
  ): Promise<OysterContainer> {
    const newContainer = this.oysterContainerRepository.create(
      createOysterContainerDto,
    );
    return await this.oysterContainerRepository.save(newContainer);
  }

  update(id: number, updateOysterContainerDto: UpdateOysterContainerDto) {
    return `This action updates a #${id} oysterContainer`;
  }

  remove(id: number) {
    return `This action removes a #${id} oysterContainer`;
  }
}
