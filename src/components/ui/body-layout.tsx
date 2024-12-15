import { NanumHim } from "@/app/ui/fonts";
import FadeInSection from "../fadein_section";

export default function BodyLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"flex flex-wrap justify-center mx-auto w-full px-2 sm:px-6 lg:px-8 bg-sub text-lg " + NanumHim.className}>
      <FadeInSection>
        <div className="mx-auto w-full py-8 lg:max-w-none">
          {children}
        </div>
      </FadeInSection>
    </div>
  );
}