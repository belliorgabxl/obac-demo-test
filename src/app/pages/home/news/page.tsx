import React from "react";
import CardHorizontal from "@/app/components/card/card-horizontal";
import { cardData } from "@/resource/fetchData/cardContent";

export default function Page() {
  return (
    <div className="w-full bg-white">
      {/* Header Section */}
      <div className=" pt-16 pb-12 text-6xl font-bold px-20 text-blue-900">
        News
      </div>

      <div className="grid grid-cols-3 gap-x-20 mx-40 ">
        <CardHorizontal cardData={cardData} />
      </div>
    </div>
  );
}