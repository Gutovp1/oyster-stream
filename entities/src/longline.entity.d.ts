import { OysterContainer } from "./oyster-container.entity";
import { MarineFarm } from "./marine-farm.entity";
export declare enum LonglineType {
    SmallBuoy = "small-buoy",
    BigBuoy = "big-buoy"
}
export declare enum AcceptedContainerTypes {
    Seed = "seed",
    Shell = "shell",
    Baby = "baby",
    Medium = "medium",
    Large = "large"
}
export declare class Longline {
    id: number;
    oyster_containers: OysterContainer[];
    marinefarm: MarineFarm;
    type: LonglineType;
    position_at_farm: number[];
    maximum_containers: number;
}
