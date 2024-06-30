export enum OysterType {
  Seed = "seed",
  Shell = "shell",
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}

export enum ContainerType {
  WhiteNursery = "white-nursery",
  BlackNursery = "black-nursery",
  Box = "box",
  Tray = "tray",
  Chilean = "chilean",
  Intermediate = "intermediate",
  Definite = "definite",
  BabyStock = "baby-stock",
  MediumStock = "medium-stock",
  LargeStock = "large-stock",
}

export type OysterContainer = {
  //Belong to longline
  longline_id: number;
  oyster_batch_id: number;
  position_at_longline: number[];
  oyster_container_type: ContainerType;
  oyster_type: OysterType;
  level_partition_quantity: number; //level for lantern/tray and partition for box
  oyster_quantity: number[];
  in_sea_started_at: Date;
  expected_maturation_at: Date;
};
