export type Box = {
  //Belong to longline
  position_at_longline: number[];
  //oyster_type: OysterType; //always seeds
  partition_quantity: number;
  oyster_quantity: number[];
  in_sea_started_at: Date;
  expected_maturation_at: Date;
};
