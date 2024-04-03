import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Batch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batch_number: number;

  @Column()
  quantity: number;

  @Column()
  purchased_at: Date;
}
