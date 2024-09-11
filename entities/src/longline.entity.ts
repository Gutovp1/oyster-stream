import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import { OysterContainer } from "./oyster-container.entity";
import { MarineFarm } from "./marine-farm.entity";

export enum LonglineType {
  SmallBuoy = "small-buoy", // can have 280 containers
  BigBuoy = "big-buoy", // can have 200 containers
}

export enum AcceptedContainerTypes {
  Seed = "seed",
  Shell = "shell", // juvenile oyster
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}

@Entity({ name: "longline" })
export class Longline {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(
    () => OysterContainer,
    (oyster_container) => oyster_container.longline
  )
  oyster_containers!: OysterContainer[];

  @ManyToOne(() => MarineFarm, (marine_farm) => marine_farm.longlines)
  @JoinColumn({ name: "marinefarmId" })
  marine_farm!: MarineFarm;

  @Column({
    type: "enum",
    enum: LonglineType,
    default: LonglineType.SmallBuoy,
  })
  type!: LonglineType;

  @Column()
  marine_farm_id!: number;

  @Column("simple-array")
  position_at_farm!: number[];

  @Column()
  maximum_containers!: number;
}
