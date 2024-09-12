/* eslint-disable @typescript-eslint/no-explicit-any */

import { getUserInfo } from "@/action/authAction";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProviders = ({ children }: any) => {
  const [user, setUser] = useState();

  const auth = async () => {
    const response: any = await getUserInfo();
    console.log(response);
    setUser(response);
  };
  useEffect(() => {
    auth();
  }, []);

  const data = {
    user,
    setUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
