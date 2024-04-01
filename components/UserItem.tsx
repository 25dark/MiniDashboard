"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserItem() {
  return (
    <div>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <p>Henry Yaw Danso</p>
      <p>example@email.com</p>
    </div>
  );
}
