import loadingAnimation from "@/assets/animation/loading.json";
import LottieAnimation from "@/components/ui/LottieAnimation";



const LoadingPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <LottieAnimation animationData={loadingAnimation} className="h-[300px]" />
    </div>
  );
};

export default LoadingPage;
