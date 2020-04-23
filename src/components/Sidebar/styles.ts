import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface IProps {
  current: boolean;
}

export const NavContainer = styled.nav`
  font-family: "Bebas Neue";
  background-color: #141414;
  -webkit-box-shadow: 10px 0px 8px 0px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 10px 0px 8px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 10px 0px 8px 0px rgba(0, 0, 0, 0.15);
  height: 100%;
  position: fixed;
  width: 100px;
  top: 0;
  left: 0;
  z-index: 1;
  @media (max-width: 600px) {
    position: inherit;
    width: 100%;
    height: 70px;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    display: flex;
    flex-direction: row;
    height: inherit;
  }
`;

export const NavListItemLink = styled(Link)`
  width: 100%;
  font-size: 14px;
`;

export const NavListItem = styled.li<IProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${({ current }) => (current ? "#2dbaba" : "inherit")};
`;

export const NavListItemIcon = styled(FontAwesomeIcon)`
  margin-bottom: 5px;
  font-size: 12px;
`;
