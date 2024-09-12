/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button, Input, Spinner } from "@nextui-org/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useRouter } from "next/navigation"
import { login } from "@/action/authAction";
import { useState } from "react";
const LoginForm = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
// loading 
const [loading, setLoading] = useState(false);
  const onSubmit = async (data: any) => {
    try {
      setLoading(true)
      const result = await login(data);
      if (result?.success) {
        toast.success(result?.message, {
          className: "bg-green-500 text-white",
        });
        setLoading(false)
        router.push('/checkout')
      } else {
        toast.error(result?.message, {
          className: "bg-red-500 text-white",
        });
        setLoading(false)
      }
    } catch (err) {
      toast.error("Something went wrong!", {
        className: "bg-red-500 text-white",
      });
      setLoading(false)
      reset()
    }
  };
  return (
    <div className="border p-5 rounded-lg">
    <h3 className="text-center text-foreground text-2xl mb-5">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <Input
          isRequired
          label="Email"
          placeholder="Enter your email"
          type="email"
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">Email is required</p>
        )}
        <Input
          isRequired
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
          <p className="text-red-500 text-sm">
            {(errors?.password?.message as string) || "Password is required"}
          </p>
        )}
        <p className="text-center text-small">
          Need to create an account?{" "}
          <Link href="/register" className="text-primary">
            Sign up
          </Link>
        </p>
        <div className="flex gap-2 justify-end">
          <Button type="submit" fullWidth color="primary">
            {loading ? <Spinner/>  :"Login"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
