"use client";

import Link from "next/link";
import BodyLayout from "./ui/body-layout";
import Image from "next/image";
import Title from "./ui/title";

const kakaoMapUrl = "https://place.map.kakao.com/326511102";
const naverMapUrl = "https://naver.me/5pNERn5Z";
// const tMapUrl = "https://tmap.life/8a3704f7";
const tMapUrl = "https://www.tmap.co.kr/tmap2/mobile/route.jsp?name=%EB%8D%94%ED%9C%B4%EC%9B%A8%EB%94%A9%ED%99%80&lon=127.050477263499&lat=37.5055813985908&goalname=%EB%8D%94%ED%9C%B4%EC%9B%A8%EB%94%A9%ED%99%80&goaladdr=%EC%84%9C%EC%9A%B8%20%EA%B0%95%EB%82%A8%EA%B5%AC%20%ED%85%8C%ED%97%A4%EB%9E%80%EB%A1%9C%20407&goalid=&goalflag=16&key=ACDF74F09C347613&referrer=https%3A%2F%2Fpoi.tmap.co.kr";

const maps = [
  {
    name: "카카오맵",
    url: kakaoMapUrl,
    icon: `/wedding/icon/kakaomap.png`,
  },
  {
    name: "네이버지도",
    url: naverMapUrl,
    icon: `/wedding/icon/navermap.jpeg`,
  },
  {
    name: "티맵",
    url: tMapUrl,
    icon: `/wedding/icon/tmap.jpeg`,
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
              <Image
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
          <Image src={`/wedding/image/location.jpg`} alt="location" width={800} height={600} className="mx-auto" />      
        </div>
        <div className="p-4">
          <div className="mb-6">
            <h3 className="text-lg mb-2">🚗 주차</h3>
            <p className="text-gray-600">
            테크노마트 지하주차장 이용(B3~B7)
            웨딩시티와 동일한 건물입니다.
            주차요원의 안내를 받으세요.
            </p>
            <p className="text-gray-600 mb-2">
            서울특별시 구로구 새말로 97 신도림테크노마트 8층 웨딩시티
            </p>
            <p className="text-gray-600">
              - ???????무료정보 기입 접수처 도장 날인시 2시간 무료 ?? 
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg mb-2">🚇 지하철</h3>
            <p className="text-gray-600">
            1호선 2호선 신도림역 
            신도림역 3번출구 테크노마트 지하1층과 직접 연결되어 있습니다.
            </p>
            <p className="text-gray-600">
              더휴웨딩홀 (이케이타워 2층)
            </p>
          </div>
          
          <div>
            <h3 className="text-lg mb-2">🚌 버스</h3>
            <p className="text-gray-600 mb-2">
            신도림역 (17-102)정류장 하차
            지하철 신도림역 3번출구 쪽
            </p>
            <p className="text-gray-600">- 지선 : 5619, 6411, 6511, 6611</p>
            <p className="text-gray-600">- 직행: 5200</p>
            <p className="text-gray-600">- 마을 : 영등포09, 영등포12, 영등포13</p>
          </div>
        </div>
      </div>
    </BodyLayout>
  );
}
