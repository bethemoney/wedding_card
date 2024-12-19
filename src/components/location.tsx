"use client";

import Link from "next/link";
import BodyLayout from "./ui/body-layout";
import Title from "./ui/title";

const kakaoMapUrl = "https://place.map.kakao.com/326511102";
const naverMapUrl = "https://naver.me/5pNERn5Z";
// const tMapUrl = "https://tmap.life/8a3704f7";
const tMapUrl = "https://tmap.life/e1e410a6";

const maps = [
  {
    name: "카카오맵",
    url: kakaoMapUrl,
    icon: `/wedding_card/icon/kakaomap.png`,
  },
  {
    name: "네이버지도",
    url: naverMapUrl,
    icon: `/wedding_card/icon/navermap.jpeg`,
  },
  {
    name: "티맵",
    url: tMapUrl,
    icon: `/wedding_card/icon/tmap.jpeg`,
  },
];

export default function Location() {
  return (
    <BodyLayout>
      <Title title="LOCATION" />
      <div className="max-w-2xl mx-auto px-4 py-4">
        <div className="flex flex-wrap justify-center items-center my-4 space-x-3">
          {maps.map((map) => (
            <Link
              href={map.url}
              target="_blank"
              key={map.name}
              className="text-gray-600 flex flex-col items-center p-2 transition-transform transform hover:scale-105 hover:text-gray-800"
            >
              <img
                src={map.icon}
                alt={`${map.name} icon`}
                width={100}
                height={100}
                className="w-10 h-10 mb-2 rounded-full shadow-md"
              />
              <span className="text-sm">{map.name}</span>
            </Link>
          ))}
        </div>

        <div className="my-8">
          <img src={`/wedding_card/image/location.jpg`} alt="location" width={800} height={600} className="mx-auto" />
        </div>
        <div className="p-4">
          <div className="text-lg mb-6">
            <p className="text-2xl text-gray-600 font-semibold">웨딩시티</p>
            <p className="text-gray-600">서울특별시 구로구 새말로 97 신도림테크노마트 8층</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl mb-2">🚗 주차</h3>
            <p className="text-gray-600">테크노마트 지하주차장 이용(B3~B7)</p>
            <p className="text-gray-600">웨딩시티와 동일한 건물입니다. 주차요원의 안내를 받으세요.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl mb-2">🚇 지하철</h3>
            <p className="text-gray-600">1호선 2호선 신도림역 3번출구</p>
            <p className="text-gray-600">테크노마트 판매동 지하 1층과 직접 연결되어 있습니다.</p>
          </div>

          <div>
            <h3 className="text-xl mb-2">🚌 버스</h3>
            <p className="text-gray-600">신도림역 (17-102)정류장 하차</p>
            <p className="text-gray-600">지하철 신도림역 3번출구 쪽</p>
            <p className="text-gray-600">- 지선 : 5619, 6411, 6511, 6611</p>
            <p className="text-gray-600">- 직행: 5200</p>
            <p className="text-gray-600">- 마을 : 영등포09, 영등포12, 영등포13</p>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
}
