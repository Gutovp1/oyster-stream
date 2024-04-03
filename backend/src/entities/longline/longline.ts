import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Container } from '../container/container';
import { Marinefarm } from '../marine-farm/marine-farm';

export enum LonglineType {
  SmallBuoy = 'small-buoy', // can have 280 containers
  BigBuoy = 'big-buoy', // can have 200 containers
}

export enum AcceptedContainerTypes {
  Seed = 'seed',
  Shell = 'shell', // juvenile oyster
  Baby = 'baby',
  Medium = 'medium',
  Large = 'large',
}

@Entity()
export class Longline {
  @PrimaryGeneratedColumn()
  id: number;

  //has many containers
  @OneToMany(() => Container, (container) => container.longline)
  containers: Container[];

  //belongs to marinefarm
  @ManyToOne(() => Marinefarm, (marinefarm) => marinefarm.longlines)
  marinefarm: Marinefarm;

  @Column({
    type: 'enum',
    enum: LonglineType,
  })
  type: LonglineType;

  @Column()
  position_at_farm: number;

  @Column({
    type: 'enum',
    enum: AcceptedContainerTypes,
  })
  accepted_container_types: AcceptedContainerTypes;

  @Column()
  maximum_containers: number;
}
