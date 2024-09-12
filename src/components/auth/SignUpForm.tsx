/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { singUp } from "@/action/authAction";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import {redirect} from 'next/navigation' 

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      const result = await singUp(data);

      if (result?.success) {
        toast.success(result?.message, {
          className: "bg-green-500 text-white",
        });
        redirect('/login')
      } else {
        toast.error(result?.message, {
          className: "bg-red-500 text-white",
        });

      }
    } catch (err) {
      toast.error("Something went wrong!", {
        className: "bg-red-500 text-white",
      });
    }
  };

  console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          label="Name"
          placeholder="Enter your Name"
          type="text"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">Name is required</p>}

        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <p className="text-red-500">Email is required</p>}

        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          {...register("password", {
            required: "Password is required",
            maxLength: {
              value: 15,
              message: "Password cannot exceed 15 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">Password is required</p>
        )}

        <p className="text-center text-small">
          Already have an account?{" "}
          <Link href="/login" className="text-primary">
            Login
          </Link>
        </p>

        <div className="flex gap-2 justify-end">
          <Button type="submit" fullWidth color="primary">
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
