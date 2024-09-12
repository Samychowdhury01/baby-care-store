/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import dynamic from 'next/dynamic';

// import Lottie from "lottie-react";
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

const LottieAnimation = ({
  animationData,
  className,
}: {
  className: string;
  animationData: any;
}) => {
  return <Lottie animationData={animationData} loop className={className} />;
};

export default LottieAnimation;
