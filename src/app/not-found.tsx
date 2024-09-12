import notFoundAnimation from "@/assets/animation/404.json";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import LottieAnimation from "@/components/ui/LottieAnimation";


const NotFoundPage = () => {
  return (
    <div className="h-[70vh]">
      <LottieAnimation animationData={notFoundAnimation} className="h-[70vh]" />

      <div className="flex items-center justify-center">
        <Button
          as={Link}
          href="/"
          color="primary"
          radius="md"
          className="shadow-2xl shadow-primary text-black"
        >
          Back To HomePage
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
