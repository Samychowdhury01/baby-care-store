"use client"
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const LoginForm = () => {

  return (
    <>
      <form className="flex flex-col gap-4">
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
        />
        <Input
          isRequired
          label="Password"
          placeholder="Enter your password"
          type="password"
        />
        <p className="text-center text-small">
          Need to create an account? <Link href="/register" className="text-primary">Sign up</Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button fullWidth color="primary">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
