import { auth } from "@/auth";
import { UserName, UserEmail } from "@/components/UserName";
import { SignOut } from "@/components/auth/SignOutButton";
import Image from "next/image";
import React from "react";

const securePage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4">
      <Image src={""}/>
      <div className="rounded-md border-2 border-green-300 bg-green-100 px-3 py-2 text-center text-green-600">
        <div>You are successfully logged in.</div>
        <div className="text-center">
          Your logged in name is <UserName />
        </div>
        <div className="text-center">
          Your logged in name is <UserEmail />
        </div>
      </div>
      <SignOut />
    </main>
  );
};

export default securePage;
