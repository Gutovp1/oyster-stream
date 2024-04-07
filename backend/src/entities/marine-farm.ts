import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Longline } from './longline';

@Entity()
export class Marinefarm {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  //has many longlines
  @OneToMany(() => Longline, (longline) => longline.marinefarm)
  longlines: Longline[];
}
