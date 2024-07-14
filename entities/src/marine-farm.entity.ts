import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Longline } from "./longline.entity";

@Entity({ name: " marinefarm" })
export class MarineFarm {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Longline, (longline) => longline.marinefarm)
  longlines!: Longline[];

  @Column()
  name!: string;
}
