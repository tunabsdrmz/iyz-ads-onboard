export interface Campaign {
  id: number;
  status: boolean;
  name: String;
  budget: number | any;
  spend: number | any;
  ctr: number | any;
  addtoCart: number;
  addtoCartValue: number | any;
  impressions: number;
  reach: number;
}

export interface AdSet extends Campaign {
  campaignId: number;
}

export interface Ad extends AdSet {
  adsetId: number;
}
