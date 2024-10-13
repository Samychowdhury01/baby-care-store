import { getUserInfo } from "@/action/authAction";

import Link from "next/link";
import LogOut from "../ui/LogOut";

const TopNav = async () => {
  const user = await getUserInfo();

  return (
    <>
      <div className="bg-background flex items-center justify-between p-5 w-full">
        <Link href="/" className="font-bold text-inherit">
          Baby<span className="text-primary">Bliss</span>
        </Link>
        <div className="flex items-center gap-2">
          {user && <p className="font-semibold text-sm">{user?.username}</p>}
          <LogOut />
        </div>
      </div>
    </>
  );
};

export default TopNav;
