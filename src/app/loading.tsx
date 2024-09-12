import loadingAnimation from "@/assets/animation/loading.json";
// import LottieAnimation from "@/components/ui/LottieAnimation";
import dynamic from "next/dynamic";

// Dynamically import LottieAnimation with no SSR
const LottieAnimation = dynamic(() => import('@/components/ui/LottieAnimation'), {
  ssr: false,
});

const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LottieAnimation animationData={loadingAnimation} className="h-[300px]" />
    </div>
  );
};

export default LoadingPage;
