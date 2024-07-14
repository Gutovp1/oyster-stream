import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "oyster-batch" })
export class OysterBatch {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  oyster_batch_number!: number;

  @Column()
  oyster_quantity!: number;

  @Column()
  purchased_at!: Date;
}
