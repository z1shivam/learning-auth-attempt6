import { auth } from "@/auth";
import UserName from "@/components/UserName";
import { SignOut } from "@/components/auth/SignOutButton";
import React from "react";

const securePage = () => {
  return (
    <div>
      Current User:
      <div>
        <UserName />
      </div>
      <SignOut />
    </div>
  );
};

export default securePage;
