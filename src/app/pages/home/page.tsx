
import { cardData } from "@/resource/fetchData/cardContent";
import CLShomepage from "@/app/components/cls-homepage";
import CardVertical from "@/app/components/card/card-vertical";
import CardHorizontal from "@/app/components/card/card-horizontal";

export default function Home() {
  return (
    <div>
      <CLShomepage />
      <div className="flex w-full bg-white ">
        <div className="w-full items-center  flex flex-col  px-4 py-4">
          <h1 className="text-5xl text-blue-800 my-5 font-bold px-5 py-1">
            News And Events
          </h1>
          {/* <hr className="my-5 border-[1px] "/> */}
          <div className="grid grid-cols-3 gap-x-20 mx-40 ">
            <CardVertical cardData={cardData} />
          </div>
          <div className="my-5 py-32 border-2 border-dashed border-gray-700 w-4/5 rounded-lg grid place-items-center text-2xl bg-gray-100">
            พื้นที่แปะภาพ
          </div>
          <div className="grid place-content-start w-full pl-40">
            <CardHorizontal cardData={cardData} />
          </div>
        </div>
      </div>
    </div>
  );
}
