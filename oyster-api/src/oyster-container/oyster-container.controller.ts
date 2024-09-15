import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { OysterContainerService } from './oyster-container.service';
import { CreateOysterContainerDto } from './dto/create-oyster-container.dto';
import { UpdateOysterContainerDto } from './dto/update-oyster-container.dto';
import { OysterContainer, OysterType } from '@entities/oyster-container.entity';

@Controller('oyster-containers')
export class OysterContainerController {
  constructor(
    private readonly oysterContainerService: OysterContainerService,
  ) {}

  @Post()
  async create(
    @Body() createOysterContainerDto: CreateOysterContainerDto,
  ): Promise<OysterContainer> {
    return this.oysterContainerService.create(createOysterContainerDto);
  }

  @Get()
  async findAll(
    @Query('sort') sort: string,
    @Query('page') page: number,
  ): Promise<OysterContainer[]> {
    return this.oysterContainerService.findAll(sort, page);
  }
  @Get(':id')
  async findOne(@Param('id') containerId: string): Promise<OysterContainer> {
    const id = parseInt(containerId, 10);
    if (isNaN(id)) {
      throw new NotFoundException('Invalid containerId');
    } else return this.oysterContainerService.findOne(id);
  }

  @Get('mature-today')
  async findAllToday(): Promise<OysterContainer[]> {
    return this.oysterContainerService.findAllToday();
  }

  @Get('oysters-to-mature')
  async findAllOystersToMature(@Query('type') type: OysterType): Promise<
    {
      oyster_quantity: number[];
      expected_maturation_at: Date;
      oyster_batch_number: number;
    }[]
  > {
    return this.oysterContainerService.findAllOystersToMature(type);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOysterContainerDto: UpdateOysterContainerDto,
  ) {
    return this.oysterContainerService.update(+id, updateOysterContainerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.oysterContainerService.remove(+id);
  }

  @Get('*')
  async handleInvalidRoute(): Promise<string> {
    throw new NotFoundException('Check the URL typed and try again.');
  }
}
