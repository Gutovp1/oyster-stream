import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMarineFarmDto } from './dto/create-marine-farm.dto';
import { UpdateMarineFarmDto } from './dto/update-marine-farm.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarineFarm } from '@entities/marine-farm.entity';
import { Longline } from '@entities/longline.entity';
import { OysterContainer } from '@entities/oyster-container.entity';

@Injectable()
export class MarineFarmService {
  constructor(
    @InjectRepository(MarineFarm)
    private readonly marineFarmRepository: Repository<MarineFarm>,
    // @InjectRepository(Longline)
    // private readonly longlineRepository: Repository<Longline>,
    @InjectRepository(OysterContainer)
    private readonly oysterContainerRepository: Repository<OysterContainer>,
  ) {}

  async findOne(farmId: number = 1) {
    const farm = await this.marineFarmRepository.findOne({
      where: { id: farmId },
      relations: ['longlines'],
    });

    if (!farm) {
      throw new NotFoundException(`Farm with ID ${farmId} not found`);
    }

    const longlineData = await Promise.all(
      farm.longlines.map(async (longline) => {
        const containers = await this.oysterContainerRepository.find({
          where: { longline_id: longline.id },
          relations: ['oyster_batch'],
        });

        const positions = {};
        containers.forEach((container) => {
          const position = container.position_at_longline[0];
          if (!positions[position]) {
            positions[position] = [];
          }
          positions[position].push({
            expected_maturation_at: container.expected_maturation_at,
            oyster_quantity: container.oyster_quantity,
            oyster_batch_number: container.oyster_batch.oyster_batch_number,
          });
        });

        return positions;
      }),
    );

    return longlineData;
  }

  findAll() {
    return `This action returns all marineFarms`;
  }

  create(createMarineFarmDto: CreateMarineFarmDto) {
    return 'This action adds a new MarineFarm';
  }

  update(id: number, updateMarineFarmDto: UpdateMarineFarmDto) {
    return `This action updates a #${id} oysterContainer`;
  }

  remove(id: number) {
    return `This action removes a #${id} oysterContainer`;
  }
}
