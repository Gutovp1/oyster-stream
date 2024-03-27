export enum LonglineType {
  SmallBuoy = "small-buoy", // can have 280 containers
  BigBuoy = "big-buoy", // can have 200 containers
}

export enum AcceptedContainerTypes {
  Seed = "seed",
  Shell = "shell", // juvenile oyster
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}

export type LongLine = {
  position_at_farm: number;
  accepted_container_types: AcceptedContainerTypes;
  maximum_containers: number;
};
