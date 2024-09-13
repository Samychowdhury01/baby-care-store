import AuthImage from "@/components/auth/AuthImage";
import SignUpForm from "@/components/auth/SignUpForm";

const RegisterPage = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around gap-5 mt-8 p-5 md:p-0">
        <AuthImage />
        <div className="w-full md:w-1/3">
          <SignUpForm />
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
