/* eslint-disable @typescript-eslint/no-explicit-any */

import { getUserInfo, removeUserInfo } from "@/action/authAction";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const AuthContext = createContext<any>(null);

export const AuthProviders = ({ children }: any) => {
  const [user, setUser] = useState<any>();
  const router = useRouter();

  const auth = async () => {
    const response: any = await getUserInfo();
    setUser(response);
  };
  const handleLogout = () => {
    setUser(null);
    removeUserInfo();
    toast.success("Logout successful", {
      className: "bg-green-500 text-white",
    });
    router.push("/login");
  };
  useEffect(() => {
    auth();
  }, []);

  const data = {
    user,
    handleLogout,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
