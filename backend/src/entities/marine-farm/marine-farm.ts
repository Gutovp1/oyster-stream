import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Longline } from '../longline/longline';

@Entity()
export class Marinefarm {
  @PrimaryGeneratedColumn()
  id: number;

  //has many longlines
  @OneToMany(() => Longline, (longline) => longline.marinefarm)
  longlines: Longline[];
}
