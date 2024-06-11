import { RegisterForm } from "@/components/auth/RegisterForm";

export default function LoginPage(){
  return <section className="h-full w-full flex justify-center pt-24 md:pt-0  md:items-center md:justify-end md:pr-[12%] bg-green-900">
    <RegisterForm />
  </section>
}