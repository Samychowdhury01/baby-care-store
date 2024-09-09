"use client";
import Container from "@/components/ui/Container";
import { NextUIProvider } from "@nextui-org/react";
import { ReactNode } from "react";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <NextUIProvider>
      <Container>{children}</Container>
    </NextUIProvider>
  );
};

export default Provider;
