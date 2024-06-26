import { LoginForm } from "@/components/auth/LoginForm";
import Meteors from "@/components/magicui/meteors";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to the app",
  description: "Generated by create next app",
};

export default function LoginPage() {
  return (
    <section className="flex h-full w-full justify-center bg-slate-800 pt-24 md:items-center md:justify-end  md:pt-0">
      <div className="relative flex h-full w-full max-w-full items-center justify-end overflow-hidden rounded-lg p-20 md:pr-[12%]">
        <Meteors number={20} />
        <LoginForm />
      </div>
    </section>
  );
}
