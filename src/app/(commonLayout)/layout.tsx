import Company from "@/components/ui/Company";
import Container from "@/components/ui/Container";
import Footer from "@/components/ui/Footer";
import NavbarComponent from "@/components/ui/Navbar";
import React from "react";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div className="relative">
        <NavbarComponent />
      </div>
      <Container>{children}</Container>
      <Company />
      <Footer />
    </>
  );
};

export default CommonLayout;
