import { NanumHim } from "@/app/ui/fonts";
import BodyLayout from "./ui/body-layout";
import Title from "./ui/title";

export default function ThanksMessage() {
  return (
    <BodyLayout>
      <Title title="You are Invited" />
        <div className={"text-center lg:text-lg text-gray-600 " + NanumHim.className} >
          <br />
          <br />
          <p>하얀 눈처럼 순수한 사람을 만나</p>
          <p>드디어 결혼합니다.</p>
          <br />
          <p>그동안 아껴주신 마음 그대로</p>
          <p>사랑과 존중의 마음을 품고 함께 살겠습니다.</p>
          <br />
          <p>오셔서 따뜻한 마음으로 축복해 주시면</p>
          <p>평생 잊을 수 없는 따스한 겨울로 남기겠습니다.</p>
          <br />
          <span className="text-4xl">⛄</span>
          <div className="px-10">
            <hr />
          </div>
          <br />
          <p><span className="text-lg">최영식</span> · <span className="text-lg">이정미</span> 의 장남 <span className="text-lg">승진</span></p>
          <p><span className="text-lg">최대연</span> · <span className="text-lg">김윤희</span> 의 장녀 <span className="text-lg">유진</span></p>
          <br />
        </div>
    </BodyLayout>
  );
}