import { PartialType } from '@nestjs/mapped-types';
import { CreateOysterContainerDto } from './create-oyster-container.dto';

export class UpdateOysterContainerDto extends PartialType(
  CreateOysterContainerDto,
) {}
