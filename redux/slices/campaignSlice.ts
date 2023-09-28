import { Campaign } from "@/interfaces/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import campaign from "@/public/campaign.json";
import { RootState } from "../store";
const initialState: Campaign[] = campaign;

const campaignSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    updateCampaignStatus: (state, action: PayloadAction<{ id: number }>) => {
      const { id } = action.payload;

      return state.map((campaign) => {
        if (campaign.id === id) {
          return {
            ...campaign,
            status: !campaign.status,
          };
        }
        return campaign;
      });
    },
  },
});

export const { updateCampaignStatus } = campaignSlice.actions;

export const selectFilteredCampaigns = (state: RootState) => {
  let statusTrueCampaigns: Campaign[];
  return (statusTrueCampaigns = state.campaignSlice.filter(
    (campaign) => campaign.status === true
  ));
};

export default campaignSlice.reducer;
