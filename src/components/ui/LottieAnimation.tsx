/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import Lottie from "lottie-react";

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
