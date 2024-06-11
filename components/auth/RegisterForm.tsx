"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { RegisterSchema } from "@/schemas/authSchema";
import { AuthCardWrapper } from "./AuthCardWrapper";
import { useState, useTransition } from "react";
import { ErrorToast } from "../ErrorToast";
import { SuccessToast } from "../SuccessToast";
import { register } from "@/actions/register";
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    startTransition(() => {
      register(values).then((data) => {
        data?.error && setError(data.error);
        data?.success && setSuccess(data.success);
        data?.success && router.push("/login");
      });
    });
    
  }
  return (
    <AuthCardWrapper
      headerLabel="Create a new account"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <ErrorToast message={error} />
          <SuccessToast message={success} />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name:</FormLabel>
                <FormMessage className="pl-2" />
                <FormControl>
                  <Input
                    placeholder="Your Name"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email:</FormLabel>
                <FormMessage className="pl-2" />
                <FormControl>
                  <Input
                    placeholder="yourname@email.com"
                    type="email"
                    disabled={isPending}
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password:</FormLabel>
                <FormMessage className="pl-2" />
                <FormControl>
                  <Input
                    placeholder="******"
                    type="password"
                    {...field}
                    disabled={isPending}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="w-full"
            size={"lg"}
            variant={"default"}
            disabled={isPending}
          >
            {isPending && (
              <AiOutlineLoading3Quarters className="h-4 w-4 mx-3 animate-spin" />
            )}
            Register
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};
