"use client";

export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-[20px] p-4">
      <div
        className="avatar rounded-full min-h-12 min-w-12  text-white text-font-700  
        bg-emerald-500 flex items-center justify-center"
      >
        HYD
      </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Henry Yaw Danso</p>
        <p className="text-[12px] text-neutral-500">example@email.com</p>
      </div>
    </div>
  );
}
