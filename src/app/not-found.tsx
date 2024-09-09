import LottieAnimation from "@/components/ui/LottieAnimation";
import notFoundAnimation from "@/assets/animation/404.json";
import { Button } from "@nextui-org/button";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div>
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
