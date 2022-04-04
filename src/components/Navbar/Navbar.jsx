import React from "react";
import {
  NavbarContainer,
  NavbarTitle,
  LinkContainer,
  LinkItem,
} from "./NavbarStyles";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarTitle>CONSTRUCTION</NavbarTitle>
      <LinkContainer>
        <LinkItem>Home</LinkItem>
        <LinkItem>About Us</LinkItem>
        <LinkItem>Services</LinkItem>
        <LinkItem>Project</LinkItem>
      </LinkContainer>
    </NavbarContainer>
  );
}
