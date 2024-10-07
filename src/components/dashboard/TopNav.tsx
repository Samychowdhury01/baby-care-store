import { getUserInfo } from "@/action/authAction"
import Link from "next/link";

const TopNav = async () => {
  const user = await getUserInfo();
  return (
    <>
      <div className="bg-background flex items-center justify-between p-5">
        <Link href="/" className="font-bold text-inherit">
          Baby<span className="text-primary">Bliss</span>
        </Link>
        {user && <p className="font-semibold">{user?.username}</p>}
      </div>
      
    </>
  );
};

export default TopNav;
