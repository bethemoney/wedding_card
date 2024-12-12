
"use client";





export default function MiddleImage() {

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-3/5 bg-cover bg-center">
        <img
          src="/wedding_card/image/middle.jpg"
          alt="MiddleImage"
          className={`w-full h-full object-cover block`}
        />
      </div>
    </div>
  );
}