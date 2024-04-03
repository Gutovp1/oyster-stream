import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Longline } from '../longline/longline';

export enum OysterType {
  Seed = 'seed',
  Shell = 'shell',
  Baby = 'baby',
  Medium = 'medium',
  Large = 'large',
}

export enum ContainerType {
  WhiteNursery = 'white-nursery',
  BlackNursery = 'black-nursery',
  Box = 'box',
  Tray = 'tray',
  Chilean = 'chilean',
  Intermediate = 'intermediate',
  Definite = 'definite',
  BabyStock = 'baby-stock',
  MediumStock = 'medium-stock',
  LargeStock = 'large-stock',
}

@Entity()
export class Container {
  //Belong to longline
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Longline, (longline) => longline.containers)
  @JoinColumn({ name: 'longlineId' })
  longline: Longline;

  @Column()
  longlineId: number;

  @Column()
  batch_id: number;

  @Column('simple-array')
  position_at_longline: number[];

  @Column({
    type: 'enum',
    enum: ContainerType,
  })
  container_type: ContainerType;

  @Column({
    type: 'enum',
    enum: OysterType,
  })
  oyster_type: OysterType;

  @Column()
  level_partition_quantity: number; //level for lantern/tray and partition for box

  @Column('simple-array')
  oyster_quantity: number[];

  @Column()
  in_sea_started_at: Date;

  @Column()
  expected_maturation_at: Date;
}
