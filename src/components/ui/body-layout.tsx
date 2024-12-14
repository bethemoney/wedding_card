import { NanumHim } from "@/app/ui/fonts";

export default function BodyLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-sub text-lg " + NanumHim.className}>
      <div className="mx-auto max-w-2xl py-8 lg:max-w-none">
        {children}
      </div>
    </div>
  );
}