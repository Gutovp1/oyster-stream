import { Controller, Get, Param, Query } from '@nestjs/common';
import { Container, OysterType } from 'src/entities/container';
import { ContainerService } from 'src/services/container.service';

@Controller('containers')
export class ContainerController {
  constructor(private readonly containerService: ContainerService) {}

  @Get()
  async findAll(
    @Query('sort') sort: string,
    @Query('page') page: number,
  ): Promise<Container[]> {
    return this.containerService.findAll(sort, page);
  }

  @Get(':containerId')
  async findOne(@Param('containerId') containerId: string): Promise<Container> {
    return this.containerService.findOne(parseInt(containerId, 10));
  }

  @Get('mature_today')
  async findAllToday(): Promise<Container[]> {
    return this.containerService.findAllToday();
  }
}

@Controller()
export class OysterController {
  constructor(private readonly containerService: ContainerService) {}

  @Get('oyster-to-mature')
  async findAllOystersToMature(
    @Query('type') type: OysterType,
  ): Promise<{ oyster_quantity: number[]; expected_maturation_at: Date }[]> {
    return this.containerService.findAllOystersToMature(type);
  }
}
