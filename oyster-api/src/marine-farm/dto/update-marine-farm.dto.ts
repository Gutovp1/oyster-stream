import { PartialType } from '@nestjs/mapped-types';
import { CreateMarineFarmDto } from './create-marine-farm.dto';

export class UpdateMarineFarmDto extends PartialType(CreateMarineFarmDto) {}
