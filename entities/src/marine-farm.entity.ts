import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Longline } from "./longline.entity";

@Entity({ name: "marine-farm" })
export class MarineFarm {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => Longline, (longline) => longline.marine_farm)
  longlines!: Longline[];

  @Column()
  name!: string;
}
