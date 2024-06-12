import { LoginButton } from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import bgImage from "@/public/site-bg.jpeg";
import Meteors from "@/components/magicui/meteors";
import SparklesText from "@/components/magicui/sparkles-text";
import ShineBorder from "@/components/magicui/shine-border";
export default function Home() {
  return (
    <main className="relative flex h-full w-full flex-col items-center justify-center gap-6 overflow-hidden bg-slate-800 px-4 md:items-end md:pr-48">
      <Meteors />

      <ShineBorder
        className="shadow-none"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        <div className="border-2px-12 flex flex-col items-center gap-6 rounded-lg bg-white bg-opacity-90 px-8 py-8 text-white">
          <h1 className="text-center text-3xl font-bold">
            <SparklesText text="SimpleAuth" />
          </h1>
          <LoginButton asChild>
            <Button size={"lg"} className="">
              Go To Login Page
            </Button>
          </LoginButton>
        </div>
      </ShineBorder>
    </main>
  );
}
