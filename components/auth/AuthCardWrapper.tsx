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
import ShineBorder from "../magicui/shine-border";

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
    <div className="flex w-full flex-col items-start justify-start gap-y-2">
      <Link href={"/"}>
        <h1 className={cn("text-3xl font-semibold")}>SimpleAuth</h1>
      </Link>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

export const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button variant={"link"} className="w-full font-normal" size={"sm"} asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export const SocialLoginButtons = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        size={"lg"}
        variant={"outline"}
        className="w-full"
        onClick={() => {}}
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
    <Card className="w-full max-w-[400px] border-none shadow-none md:w-[400px] md:border-2 md:border-slate-300 md:shadow-md">
      <ShineBorder
        className="w-full max-w-[400px]  shadow-none md:w-[400px]"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
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
      </ShineBorder>
    </Card>
  );
};
