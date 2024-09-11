import { OysterContainer } from "./oyster-container.entity";

export declare class OysterBatch {
  id: number;
  oyster_containers: OysterContainer[];
  oyster_batch_number: number;
  oyster_quantity: number;
  purchased_at: Date;
}
