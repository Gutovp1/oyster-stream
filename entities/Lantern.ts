export enum OysterType {
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}

export enum LanternType {
  WhiteNursery = "white-nursery",
  BlackNursery = "black-nursery",
  Chilean = "chilean",
  Intermediate = "intermediate",
  BabyStock = "baby-stock",
  MediumStock = "medium-stock",
  LargeStock = "large-stock",
}

export type Lantern = {
  //Belong to longline
  position_at_longline: number[];
  lantern_type: LanternType;
  oyster_type: OysterType;
  level_quantity: number;
  oyster_quantity: number[];
  in_sea_started_at: Date;
  expected_maturation_at: Date;
  batch: string;
};
