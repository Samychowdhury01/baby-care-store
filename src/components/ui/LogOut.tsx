"use client";

import { useAuth } from "@/lib/AuthProviders";
import { Button } from "@nextui-org/button";

const LogOut = () => {
  const { handleLogout } = useAuth();
  return (
    <Button
      onClick={handleLogout}
      color="primary"
      variant="shadow"
      className="text-black"
    >
      Logout
    </Button>
  );
};

export default LogOut;
