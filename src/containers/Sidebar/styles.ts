import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IProps {
  current: boolean;
}

export const NavContainer = styled.nav`
  top: 0;
  left: 0;
  background-color: #2d2c32;
  -webkit-box-shadow: 10px 0px 8px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 10px 0px 8px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 10px 0px 8px 0px rgba(0, 0, 0, 0.15);
  position: fixed;
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NavListItem = styled.li<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ current }) => (current ? "#2dbaba" : "inherit")};
`;

export const NavListItemLink = styled(Link)`
  font-size: 13px;
  margin-top: 5px;
`;

export const NavListItemIcon = styled(FontAwesomeIcon)`
  font-size: 12px;
`;
