import { PartialType } from '@nestjs/mapped-types';
import { CreateLonglineDto } from './create-longline.dto';

export class UpdateLonglineDto extends PartialType(CreateLonglineDto) {}
