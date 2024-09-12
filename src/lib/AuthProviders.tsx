/* eslint-disable @typescript-eslint/no-explicit-any */

import { getToken, getUserInfo, removeUserInfo } from "@/action/authAction";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const AuthContext = createContext<any>(null);

export const AuthProviders = ({ children }: any) => {
  const [user, setUser] = useState<any>();
  const [token, setToken] = useState<string>();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // a async function to get the userInfo

  const auth = async () => {
    const response: any = await getUserInfo();
    const token = await getToken()
    setToken(token)
    setUser(response);
  };

  // logout handler
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
  }, [pathname, searchParams]);

  const data = {
    user,
    handleLogout,
    token
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
