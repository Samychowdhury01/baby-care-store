/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { TSignUpInfo, TLoginInfo } from "@/types";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const login = async (loginInfo: TLoginInfo) => {
  // login logic here
  const res = await fetch(`${process.env.LOCAL_SERVER}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginInfo),
  });
  const data = await res.json();
  if (data?.success) {
    cookies().set("token", data?.token);
  }
  return data;
};

export const singUp = async (singUpInfo: TSignUpInfo) => {
  // sign-up logic here
  const res = await fetch(`${process.env.LOCAL_SERVER}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(singUpInfo),
  });
  const data = await res.json();
  return data;
};

export const getUserInfo = async () => {
  const token = cookies().get("token")?.value;
  let decodedData = null;
  if (token) {
    decodedData = (await jwtDecode(token)) as any;

    return decodedData;
  } else {
    return null;
  }
};
