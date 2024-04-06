import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Container, OysterType } from 'src/entities/container';

@Injectable()
export class OysterService {
  constructor(
    @InjectRepository(Container)
    private readonly containerRepository: Repository<Container>,
  ) {}

  async findAllOystersToMature(
    type: OysterType,
  ): Promise<{ oyster_quantity: number[]; expected_maturation_at: Date }[]> {
    const containers = await this.containerRepository.find({
      where: { oyster_type: type },
    });
    return containers.map((container) => ({
      oyster_quantity: container.oyster_quantity,
      expected_maturation_at: container.expected_maturation_at,
    }));
  }
}
