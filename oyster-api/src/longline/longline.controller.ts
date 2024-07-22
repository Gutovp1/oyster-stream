import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LonglineService } from './longline.service';
import { CreateLonglineDto } from './dto/create-longline.dto';
import { UpdateLonglineDto } from './dto/update-longline.dto';

@Controller('longline')
export class LonglineController {
  constructor(private readonly longlineService: LonglineService) {}

  @Post()
  create(@Body() createLonglineDto: CreateLonglineDto) {
    return this.longlineService.create(createLonglineDto);
  }

  @Get()
  findAll() {
    return this.longlineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.longlineService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLonglineDto: UpdateLonglineDto,
  ) {
    return this.longlineService.update(+id, updateLonglineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.longlineService.remove(+id);
  }
}
