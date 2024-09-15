import { ContainerType, OysterType } from '@entities/oyster-container.entity';

export class CreateOysterContainerDto {
  longline_id: number;
  oyster_batch_id: number;
  position_at_longline: number[];
  oyster_container_type: ContainerType;
  oyster_type: OysterType;
  level_partition_quantity: number;
  oyster_quantity: number[];
  in_sea_started_at: Date;
  expected_maturation_at: Date;
}
