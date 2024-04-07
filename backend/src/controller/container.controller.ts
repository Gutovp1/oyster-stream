import {
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
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

  @Get('mature_today')
  async findAllToday(): Promise<Container[]> {
    return this.containerService.findAllToday();
  }

  @Get(':containerId')
  async findOne(@Param('containerId') containerId: string): Promise<Container> {
    const id = parseInt(containerId, 10);
    if (isNaN(id)) {
      throw new NotFoundException('Invalid containerId');
    } else return this.containerService.findOne(id);
  }

  @Get('*')
  async handleInvalidRoute(): Promise<string> {
    throw new NotFoundException('Check the URL typed and try again.');
  }
}
