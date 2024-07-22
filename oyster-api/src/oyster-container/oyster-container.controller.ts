import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OysterContainerService } from './oyster-container.service';
import { CreateOysterContainerDto } from './dto/create-oyster-container.dto';
import { UpdateOysterContainerDto } from './dto/update-oyster-container.dto';

@Controller('oyster-container')
export class OysterContainerController {
  constructor(
    private readonly oysterContainerService: OysterContainerService,
  ) {}

  @Post()
  create(@Body() createOysterContainerDto: CreateOysterContainerDto) {
    return this.oysterContainerService.create(createOysterContainerDto);
  }

  @Get()
  findAll() {
    return this.oysterContainerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.oysterContainerService.findOne(+id);
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
}
