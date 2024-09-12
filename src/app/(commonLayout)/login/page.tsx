import { getUserInfo } from "@/action/authAction";
import AuthImage from "@/components/auth/AuthImage";
import LoginForm from "@/components/auth/LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const  user  = await getUserInfo();
  
  if (user) {
    redirect("/");
  }
  return (
    <>
      <div className="flex items-center justify-around gap-5 mt-8">
      <AuthImage />
    <div className="w-1/3">
    <LoginForm />
    </div>
      </div>
    </>
  );
};

export default LoginPage;
