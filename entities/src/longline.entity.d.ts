import { OysterContainer } from "./oyster-container.entity";
import { MarineFarm } from "./marine-farm.entity";
export declare enum LonglineType {
  SmallBuoy = "small-buoy",
  BigBuoy = "big-buoy",
}
export declare enum AcceptedContainerTypes {
  Seed = "seed",
  Shell = "shell",
  Baby = "baby",
  Medium = "medium",
  Large = "large",
}
export declare class Longline {
  id: number;
  oyster_containers: OysterContainer[];
  marine_farm: MarineFarm;
  marine_farm_id: number;
  type: LonglineType;
  accepted_container_types: AcceptedContainerTypes[];
  position_at_farm: number[];
  maximum_containers: number;
}
