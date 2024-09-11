import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OysterContainer } from "./oyster-container.entity";

@Entity({ name: "oyster-batch" })
export class OysterBatch {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(
    () => OysterContainer,
    (oyster_container) => oyster_container.oyster_batch
  )
  oyster_containers!: OysterContainer[];

  @Column()
  oyster_batch_number!: number;

  @Column()
  oyster_quantity!: number;

  @Column()
  purchased_at!: Date;
}
