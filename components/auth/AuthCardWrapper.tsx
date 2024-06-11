"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { signIn } from "@/auth";

interface AuthCardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial: boolean;
}

interface HeaderProps {
  label: string;
}

interface BackButtonProps {
  href: string;
  label: string;
}

export const AuthHeader = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-2 items-start justify-start">
      <Link href={"/"}>
        <h1 className={cn("text-3xl font-semibold")}>SimpleAuth</h1>
      </Link>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant={"link"} className="font-normal w-full" size={"sm"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export const SocialLoginButtons = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={()=>{}}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};

export const AuthCardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: AuthCardWrapperProps) => {
  return (
    <Card className="w-full shadow-none border-none max-w-[400px] md:w-[400px] md:shadow-md md:border-2 md:border-slate-300">
      <CardHeader>
        <AuthHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <SocialLoginButtons />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
