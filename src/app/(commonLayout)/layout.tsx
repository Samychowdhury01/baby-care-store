import NavbarComponent from "@/components/ui/Navbar";
import React from "react";

const CommonLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="relative">
      {/* Navbar positioned over the content */}
      <NavbarComponent/>
      <div>{children}</div>
    </div>
  );
};

export default CommonLayout;
