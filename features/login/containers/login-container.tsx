"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "@/components/button/button";
import FormInput from "@/components/input/form-input";
import { Controller } from "react-hook-form";

import { useLogin } from "../hooks/useLogin";
import { cn } from "@/lib/utils";

const LoginContainer = () => {
  const { control, handleSubmit, onSubmit, onError } = useLogin();
  const [copiedCredential, setCopiedCredential] = useState<string | null>(null);

  const copyCredential = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedCredential(label);
    } catch (error) {
      console.error(`Failed to copy the ${label}.`, error);
    }
  };

  return (
    <section className="w-full h-full flex flex-col justify-center items-center relative">
      <div className="space-y-3 w-full text-center">
        <p className="text-tid-red-100 text-[32px]"> Welcome</p>
        <p className="text-tid-grey-100"> Login with Your Email and Password</p>
      </div>

      <div className="space-y-5 w-full mt-6">
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <FormInput
              name="Email"
              value={field.value}
              onChange={field.onChange}
              placeholder="Enter Email"
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <FormInput
              name="Password"
              value={field.value}
              onChange={field.onChange}
              placeholder="Enter Password"
              error={fieldState.error?.message}
            />
          )}
        />

        <div className="flex justify-center">
          <div className="w-fit flex flex-col">
            <Button variant="PRIMARY" onClick={handleSubmit(onSubmit, onError)}>
              <p className="px-20">LOGIN</p>
            </Button>
            <div className="w-full mt-5 grid grid-cols-12 items-center">
              <div className="col-span-5">
                <div className="h-px bg-tid-red-100"></div>
              </div>
              <div className="col-span-2">
                <p className="text-center font-semibold text-tid-red-100">
                  {" "}
                  OR{" "}
                </p>
              </div>
              <div className="col-span-5">
                <div className="h-px bg-tid-red-100"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <div className="w-fit">
            <Button variant="OUTLINE" onClick={() => {}}>
              <Image
                src={`/icons/google-icon.png`}
                alt="google"
                width={16}
                height={16}
              />
            </Button>
          </div>
          <div className="w-fit">
            <Button variant="OUTLINE" onClick={() => {}}>
              <Image
                src={`/icons/facebook-icon.png`}
                alt="facebook"
                width={16}
                height={16}
              />
            </Button>
          </div>
          <div className="w-fit">
            <Button variant="OUTLINE" onClick={() => {}}>
              <Image
                src={`/icons/apple-icon.png`}
                alt="apple"
                width={16}
                height={16}
              />
            </Button>
          </div>
        </div>

        <p className="text-center text-tid-grey-100 text-sm">
          Don’t have account?{" "}
          <span>
            <Link href={"/register"} className="text-tid-red-100">
              {" "}
              Register Now
            </Link>
          </span>{" "}
        </p>
      </div>

      <div
        className={cn(
          "absolute bottom-0 w-full flex justify-center flex-col",
          "bg-green-50 w-fit p-4 opacity-40",
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <p>email : user1@mail.com</p>
          <button
            type="button"
            onClick={() => copyCredential("email", "user1@mail.com")}
            className="text-tid-red-100 underline"
            aria-label="Copy demo email"
          >
            <span>{copiedCredential === "email" ? "copied" : "copy"}</span>
          </button>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p>password : Password1</p>
          <button
            type="button"
            onClick={() => copyCredential("password", "Password1")}
            className="text-tid-red-100 underline"
            aria-label="Copy demo password"
          >
            <span>{copiedCredential === "password" ? "copied" : "copy"}</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LoginContainer;
