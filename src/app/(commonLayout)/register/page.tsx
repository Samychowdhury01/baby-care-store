import { getUserInfo } from "@/action/authAction";
import AuthImage from "@/components/auth/AuthImage";
import SignUpForm from "@/components/auth/SignUpForm";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const user = await getUserInfo();
  if (user) {
    redirect("/");
  }
  return (
    <>
      <div className="flex items-center justify-around gap-5 mt-8">
        <AuthImage />
        <div className="w-1/3">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
