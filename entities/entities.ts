export type MarineFarm = {
  type_of_production: "lantern" | "cluster"; // lantern or cluster
  location: string;
  cnpj: string;
};

export type Lantern = {
  type: "nursery" | "intermediate" | "definitive"; //
  size: number; //levels, default is 5
  quantity: number;
  duration_in_sea: number; // in days
  start_date_in_sea: Date;
  oyster_id: number;
  longline_id: number;
  status: string; //
  last_cleaning: Date;
};

export type Longline = {
  position_xy: [number, number];
  quantity_lanterns: number;
};

export type Oyster = {
  type: "baby" | "medium" | "large";
  cultivation_time: number; //days
  price: number; //
  lantern_id: number; //
  cluster_id: number; //
};

export type Customer = {
  name: string; //
  cnpj: string; //
  oyster_type: "baby" | "medium" | "large";
  dozen_quantity: number; // sold in dozens
  dozen_price: number;
  order_total_price: number;
  buying_date: Date;
};
