"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { selectFilteredAdSets } from "@/redux/slices/adSetSlice";
import { Suspense } from "react";

import { selectFilteredAds } from "@/redux/slices/adSlice";
import { selectFilteredCampaigns } from "@/redux/slices/campaignSlice";

import Table from "@/components/Table";
import Footer from "@/components/Footer";

export default function Home() {
  const campaignData = useSelector((state: RootState) => state.campaignSlice);
  const filteredCampaigns = useSelector(selectFilteredCampaigns);
  const filteredAdSets = useSelector(selectFilteredAdSets);
  const filteredAds = useSelector(selectFilteredAds);

  return (
    <main className="pl-4 pt-8 h-screen flex justify-center items-start bg-secondary-bg-gray ">
      <Tabs defaultValue="Kampanyalar" className="w-[95%] ">
        <TabsList>
          <TabsTrigger value="Kampanyalar">Kampanyalar</TabsTrigger>
          <TabsTrigger value="Reklam Grupları">Reklam Grupları</TabsTrigger>
          <TabsTrigger value="Reklamlar">Reklamlar</TabsTrigger>
        </TabsList>
        <TabsContent value="Kampanyalar">
          <Suspense fallback={<p>Loading Data...</p>}>
            <Table data={campaignData} table={"campaignTable"} />
            <Footer footerData={filteredCampaigns} />
          </Suspense>
        </TabsContent>
        <TabsContent value="Reklam Grupları">
          <Suspense fallback={<p>Loading Data...</p>}>
            <Table data={filteredAdSets} table={"adsetTable"} />
            <Footer footerData={filteredAdSets} />
          </Suspense>
        </TabsContent>
        <TabsContent value="Reklamlar">
          <Suspense fallback={<p>Loading Data...</p>}>
            <Table data={filteredAds} table={"adTable"} />
            <Footer footerData={filteredAds} />
          </Suspense>
        </TabsContent>
      </Tabs>
    </main>
  );
}
