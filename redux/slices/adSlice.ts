import { Ad } from "@/interfaces/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ad from "@/public/ad.json";
import { RootState } from "../store";

const initialState: Ad[] = ad;

const adSlice = createSlice({
  name: "ad",
  initialState,
  reducers: {
    setAds: (state, action) => {
      return action.payload;
    },
    updateAdStatus: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      return state.map((ad) => {
        if (ad.id === id) {
          return {
            ...ad,
            status: !ad.status,
          };
        }
        return ad;
      });
    },
  },
});

export const { setAds, updateAdStatus } = adSlice.actions;

export const selectFilteredAds = (state: RootState) => {
  const statusTrueAdSets = state.adSetSlice.filter(
    (adset) => adset.status === true
  );
  const statusTrueCampaigns = state.campaignSlice.filter(
    (campaign) => campaign.status === true
  );

  return state.adSlice.filter((ad) =>
    statusTrueCampaigns.some(
      (campaign) =>
        campaign.id === ad.campaignId &&
        statusTrueAdSets.some((adset) => adset.id === ad.adsetId)
    )
  );
};

export default adSlice.reducer;
