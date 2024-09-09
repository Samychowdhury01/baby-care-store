import LottieAnimation from "@/components/ui/LottieAnimation";
import loadingAnimation from '@/assets/animation/loading.json'
const LoadingPage = () => {
    return (
        <div className="flex items-center justify-center h-screen">
        <LottieAnimation animationData={loadingAnimation} className="h-[300px]" />
    </div>
    );
};

export default LoadingPage;