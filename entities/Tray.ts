export type Tray = {
  //Belong to longline
  position_at_longline: number[];
  //oyster_type: "Seed"; //it is always a larger seed
  level_quantity: number;
  oyster_quantity: number[];
  in_sea_started_at: Date;
  expected_maturation_at: Date;
};
