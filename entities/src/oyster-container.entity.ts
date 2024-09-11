import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import { Longline } from "./longline.entity";
import { OysterBatch } from "./oyster-batch.entity";

export enum OysterType {
  Seed = "seed",
  Shell = "shell",
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}

export enum ContainerType {
  WhiteNursery = "white-nursery",
  BlackNursery = "black-nursery",
  Box = "box",
  Tray = "tray",
  Chilean = "chilean",
  Intermediate = "intermediate",
  Definite = "definite",
  BabyStock = "baby-stock",
  MediumStock = "medium-stock",
  LargeStock = "large-stock",
}

@Entity({ name: "oyster-container" })
export class OysterContainer {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Longline, (longline) => longline.oyster_containers)
  @JoinColumn({ name: "longlineId" })
  longline!: Longline;

  @Column()
  longline_id!: number;

  @ManyToOne(
    () => OysterBatch,
    (oyster_batch) => oyster_batch.oyster_containers
  )
  @JoinColumn({ name: "oysterBatchId" })
  oyster_batch!: OysterBatch;

  @Column()
  oyster_batch_id!: number;

  @Column("simple-array")
  position_at_longline!: number[];

  @Column({
    type: "enum",
    enum: ContainerType,
    default: ContainerType.WhiteNursery,
  })
  oyster_container_type!: ContainerType;

  @Column({
    type: "enum",
    enum: OysterType,
    default: OysterType.Seed,
  })
  oyster_type!: OysterType;

  @Column()
  level_partition_quantity!: number;

  @Column("simple-array")
  oyster_quantity!: number[];

  @Column()
  in_sea_started_at!: Date;

  @Column()
  expected_maturation_at!: Date;
}
