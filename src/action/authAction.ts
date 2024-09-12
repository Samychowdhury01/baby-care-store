"use server";

import { TSignUpInfo, TLoginInfo } from "@/types";

export const login = async ({ loginInfo }: { loginInfo: TLoginInfo }) => {
  // login logic here
};

export const singUp = async (singUpInfo: TSignUpInfo) => {
  console.log(singUpInfo, "lin 10");
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
