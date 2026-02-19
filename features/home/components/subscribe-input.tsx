"use client";
import { useState } from "react";
import FormInput from "@/components/input/form-input";
import Button from "@/components/button/button";

const SubscribeFormInput = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-10">
      <div className="w-fit">
        <FormInput
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={email}
        />
      </div>
      <Button type="PRIMARY" onClick={() => {}}>
        Subscribe
      </Button>
    </div>
  );
};

export default SubscribeFormInput;
