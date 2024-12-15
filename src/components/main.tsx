"use client";

import { NanumGaram, NanumHim } from "@/app/ui/fonts";



export default function Main() {

  return (
    <div className="flex flex-col bg-sub" style={{'paddingBottom': '2rem'}}>
      <div className="relative w-full bg-cover bg-sub">
        <img
          src="/wedding_card/image/main.jpg"
          alt="Main"
          className={`w-full h-full object-cover block`}
        />
      </div>
      <div className={"flex flex-col justify-center items-center h-full bg-sub " + NanumGaram.className}
      >
        <br />
        <div className={"flex items-center space-x-4"}>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-yellow-600 text-sm font-semibold">GROOM</span>
            <span className="text-3xl text-white font-semibold">승&nbsp;&nbsp;진</span>
          </div>
          <div className="font-light text-pink-200 text-xl mx-8 px-4">
            |
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-yellow-600 text-sm font-semibold">BRIDE</span>
            <span className="text-3xl  text-white font-semibold ">유&nbsp;&nbsp;진</span>
          </div>
        </div>
        <br />
        <p className={"text-2xl text-gray-600 " + NanumHim.className}>2025년 2월 16일 일요일 오후 12시 10분</p>
        <p className={"text-2xl text-gray-600 " + NanumHim.className}>웨딩시티</p>
        <p />
      </div>
    </div>
  );
}