import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bgImage from "@/public/site-bg.jpeg";
export default function Home() {
  return (
    <>
      <Image
        src={bgImage}
        alt="background image"
        className="fixed -z-10 h-full w-full object-cover"
      />
      <main className="flex h-full w-full flex-col items-center justify-center gap-6 md:items-end md:pr-48 px-4">
        <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-black bg-black bg-opacity-50 px-12 py-8 text-white">
          <h1 className="text-3xl font-bold text-center">Welcome to SimpleAuth</h1>
          <LoginButton asChild>
            <Button size={"lg"} className="bg-green-800 border-2 border-green-500 ">Go To Login Page</Button>
          </LoginButton>
        </div>
      </main>
    </>
  );
}
