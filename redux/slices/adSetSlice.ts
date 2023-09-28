import { AdSet } from "@/interfaces/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import adset from "@/public/adset.json";
import { RootState } from "../store";

const initialState: AdSet[] = adset;

const adSetSlice = createSlice({
  name: "adset",
  initialState,
  reducers: {
    setAdsets: (state, action) => {
      return action.payload;
    },
    updateAdSetStatus: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;
      return state.map((adset) => {
        if (adset.id === id) {
          return {
            ...adset,
            status: !adset.status,
          };
        }
        return adset;
      });
    },
  },
});

export const { setAdsets, updateAdSetStatus } = adSetSlice.actions;

export const selectFilteredAdSets = (state: RootState) => {
  const statusTrueCampaigns = state.campaignSlice.filter(
    (campaign) => campaign.status === true
  );
  return state.adSetSlice.filter((adset) =>
    statusTrueCampaigns.some((campaign) => campaign.id === adset.campaignId)
  );
};

export default adSetSlice.reducer;
