export enum LonglineType {
  SmallBuoy = "small-buoy",
  BigBuoy = "big-buoy",
}

export enum AcceptedLanternTypes {
  Seed = "seed",
  Shell = "shell", // juvenile oyster
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}

export type LongLine = {
  position_at_farm: number;
  accepted_lantern_types: AcceptedLanternTypes;
  maximum_lanterns: number;
};
