import { Controller, Get, Query } from '@nestjs/common';
import { OysterService } from '../services/oyster.service';
import { OysterType } from 'src/entities/container';

@Controller()
export class OysterController {
  constructor(private readonly oysterService: OysterService) {}

  @Get('oysters-to-mature')
  async findAllOystersToMature(
    @Query('type') type: OysterType,
  ): Promise<{ oyster_quantity: number[]; expected_maturation_at: Date }[]> {
    return this.oysterService.findAllOystersToMature(type);
  }
}
