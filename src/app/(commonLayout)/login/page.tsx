
import AuthImage from "@/components/auth/AuthImage";
import LoginForm from "@/components/auth/LoginForm";

const LoginPage =  () => {
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
