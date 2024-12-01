"use client";

import { NanumHim } from "@/app/ui/fonts";



export default function Main() {

  return (
    <div className="flex flex-col h-screen">
      
      <div className="relative w-full justify-center h-1/6 bg-youjin">
         <div>Wedding Day</div>
      </div>
      <div className="relative w-full h-3/5 bg-cover bg-center">
        <img
          src="/wedding_card/image/main.jpg"
          alt="Main"
          className={`w-full h-full object-cover block`}
        />
      </div>
      <div className="flex flex-col justify-center items-center h-2/5 bg-youjin">
        <br />
        <div className={"flex items-center space-x-4 " + `${NanumHim.className}`}>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-yellow-600 text-sm">GROOM</span>
            <span className="text-4xl text-white">승&nbsp;&nbsp;진</span>
          </div>
          <div className="font-light text-pink-200 text-xl mx-8 px-4">
            |
          </div>
          <div className="flex flex-col items-center space-y-1">
            <span className="text-yellow-600 text-sm">BRIDE</span>
            <span className="text-4xl  text-white">유&nbsp;&nbsp;진</span>
          </div>
        </div>
        <br />
        <p className="text-gray-600">2025년 2월 16일 일요일 오후 12시 10분</p>
        <p className="text-gray-600">웨딩시티</p>
      </div>
    </div>
  );
}