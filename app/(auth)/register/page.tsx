import { RegisterForm } from "@/components/auth/RegisterForm";
import Meteors from "@/components/magicui/meteors";

export default function LoginPage() {
  return (
    <section className="flex h-full w-full justify-center bg-slate-800 pt-24 md:items-center md:justify-end  md:pt-0">
      <div className="relative flex h-full w-full max-w-full items-center justify-end overflow-hidden rounded-lg p-20 md:pr-[12%]">
        <Meteors number={20} />
        <RegisterForm />
      </div>
    </section>
  );
}
