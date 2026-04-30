"use client";
import { useState } from "react";
import FormInput from "@/components/input/form-input";
import Button from "@/components/button/button";
import { cn } from "@/lib/utils";

const SubscribeFormInput = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex justify-center items-center mt-10 gap-x-4">
      <div className="w-fit">
        <input className={cn(
          "w-full px-4 py-3 border border-tid-red-100 rounded-lg",
          "focus:outline-tid-red-100 focus:outline-1"
        )} type="text" name={email} value={email} placeholder={'Your Email'} onChange={handleChange} />
      </div>
      <div className="w-fit ">
        <Button variant="PRIMARY" onClick={() => { }}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default SubscribeFormInput;
