"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import useUserDataStore from "@/store";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

function NavbarMain() {
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userData, setUserData } = useUserDataStore();

  const handleLogout = () => {
    setUserData(null);
    router.push("/");
  };

  const menuItems = ["About", "Products"];
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            ECOMMERCE
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {userData?.token && (
          <NavbarItem>
            <Link color="foreground" href="/dashboard">
              Dasboard
            </Link>
          </NavbarItem>
        )}
      </NavbarContent>
      {!userData?.token && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/sign-in">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="/sign-up" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      )}
      {userData?.token && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="/dashboard">{userData.user.name}</Link>
          </NavbarItem>
        </NavbarContent>
      )}

      {userData?.token && (
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Button onPress={onOpen}>Logout</Button>
          </NavbarItem>
        </NavbarContent>
      )}

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Heyyy</ModalHeader>
              <ModalBody>
                <p>Estas seguro que deseas cerrar sesion</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    handleLogout();
                    onClose();
                  }}
                >
                  Cerrar sesion
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Navbar>
  );
}

export default NavbarMain;
