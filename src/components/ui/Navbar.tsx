"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Badge,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CartIcon from "./CartIcon";
import { useAppSelector } from "@/redux/hook";
import { useAuth } from "@/lib/AuthProviders";

const NavbarComponent = () => {
  const { user } = useAuth();
  console.log(user);
  const { selectedItems } = useAppSelector((state) => state.cart);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = ["Home", "Categories", "Dashboard"];

  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-primary",
        ],
      }}
      className={`bg-transparent  ${
        pathname === "/" ? "absolute top-0 left-0 right-0 z-10" : ""
      }`}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      {/* for small device */}
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">
            Baby<span className="text-primary">Bliss</span>
          </p>
        </NavbarBrand>
      </NavbarContent>
      {/* for md device  */}
      <NavbarBrand className="hidden md:block">
        <p className="font-bold text-inherit">
          Baby<span className="text-primary">Bliss</span>
        </p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive={isActive("/")}>
          <Link color={isActive("/") ? "primary" : "foreground"} href="/">
            Home
          </Link>
        </NavbarItem>

        <NavbarItem isActive={isActive("/categories")}>
          <Link
            color={isActive("/categories") ? "primary" : "foreground"}
            href="/categories"
          >
            Categories
          </Link>
        </NavbarItem>

        <NavbarItem isActive={isActive("/dashboard")}>
          <Link
            color={isActive("/dashboard") ? "primary" : "foreground"}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Badge color="primary" content={selectedItems}>
            <Button
              as={Link}
              href="/checkout"
              variant="bordered"
              className="text-foreground border-none"
              isIconOnly
            >
              <CartIcon />
            </Button>
          </Badge>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            color="primary"
            href="/login"
            variant="shadow"
            className="text-black"
          >
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className={`${
                isActive(`${item === "Home" ? "/" : `/${item}`}`)
                  ? "text-primary"
                  : "text-foreground"
              }`}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavbarComponent;
