import { Controller, Get, Param, Query } from '@nestjs/common';
import { Container } from 'src/entities/container';
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
}
