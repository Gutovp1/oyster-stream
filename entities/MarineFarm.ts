export enum EnumProduction {
  Lantern = "lantern",
  Cluster = "cluster",
}

export type MarineFarm = {
  //has many longlines
  production_type: EnumProduction;
};
