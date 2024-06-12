import { UserEmail, UserName } from '@/components/UserName';
import { SignOut } from '@/components/auth/SignOutButton';
import Meteors from '@/components/magicui/meteors';
import React from 'react'

const LogOutPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-4 bg-slate-800">
      <div className="relative flex h-full w-full max-w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg p-20">
        <Meteors number={20} />
        <div className="rounded-md border-2 border-green-300 bg-green-100 px-3 py-2 text-center text-green-600">
          <div>You are currently logged in.</div>
          <div className="text-center">
            Your logged in name is <UserName />
          </div>
          <div className="text-center">
            Your logged in name is <UserEmail />
          </div>
        </div>
        <SignOut />
      </div>
    </main>
  );
};
export default LogOutPage