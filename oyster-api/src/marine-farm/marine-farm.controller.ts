import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MarineFarmService } from './marine-farm.service';
import { CreateMarineFarmDto } from './dto/create-marine-farm.dto';
import { UpdateMarineFarmDto } from './dto/update-marine-farm.dto';

@Controller('marine-farm')
export class MarineFarmController {
  constructor(private readonly marineFarmService: MarineFarmService) {}

  @Post()
  create(@Body() createMarineFarmDto: CreateMarineFarmDto) {
    return this.marineFarmService.create(createMarineFarmDto);
  }

  @Get()
  findAll() {
    return this.marineFarmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.marineFarmService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateMarineFarmDto: UpdateMarineFarmDto,
  ) {
    return this.marineFarmService.update(+id, updateMarineFarmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.marineFarmService.remove(+id);
  }
}
