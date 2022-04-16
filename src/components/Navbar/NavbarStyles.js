import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  position: static;
  padding-right: 85px;
  padding-left: 135px;
  padding-top: 20px;
  display: inline-flex;
  justify-content: space-between;
`;

export const NavbarTitle = styled.p`
  color: #18a7b9;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -6%;
`;

export const LinkContainer = styled.ul`
  display: inline-flex;
  list-style: none;
`;

export const LinkItem = styled.li`
  color: #313131;
  margin-left: 35px;
  font-size: 18px;
  font-weight: 400;
`;
