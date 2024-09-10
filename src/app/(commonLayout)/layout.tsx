import Company from "@/components/ui/Company";
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
      <div>{children}</div>
      <Company />
      <Footer />
    </>
  );
};

export default CommonLayout;
