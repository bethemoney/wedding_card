import { NanumHim } from "@/app/ui/fonts";

export default function Title({ title }: { title: string }) {
  return (
    <h2 className={"text-xl text-center mt-2 " + `${NanumHim.className}`}>{title}</h2>
  );
}