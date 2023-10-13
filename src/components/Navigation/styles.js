import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  padding: 40px 100px;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;

  @media(max-width: 650px) {
    padding: 28px 20px 0.5rem;;
  }
`;

export const Logo = styled.p`
  font-family: 'Inter-Bold', sans-serif;
  color: #000;
  font-size: 24px;
  font-weight: 800;
  line-height: normal;

  @media(max-width: 650px) {
    font-size: 0.9rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 36px;
  width: max-content;

  @media(max-width: 650px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
 display: flex;
  align-items: center;
  column-gap: 47px;
  width: max-content;
  margin-right: 61px;

  @media(max-width: 650px) {
    display: none;
  }
`;

export const ImageLink = styled(Link)`
  width: 31px;
  height: 31.538px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: #000;
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 0.9rem;
    height: 0.9rem;
  }
`

export const TextLink = styled(NavLink)`
  font-family: 'Roboto-Regular', sans-serif;
  color: #1F1F1F;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;

  &.active {
    font-family: 'Roboto-Bold', sans-serif;
    font-weight: 600;
    color: #000;
  }
`;

export const TextButton = styled.button`
  font-family: 'Roboto-Regular', sans-serif;
  color: #1F1F1F;
  font-size: 0.8rem;
  font-weight: 400;
  line-height: normal;
  width: max-content;
  display: flex;
  align-items: center;
  column-gap: 7px;
  margin-right: -5px;

  img {
    width: 12px;
    height: 12px;
  }
`;

export const MenuButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;

  img {
    width: 24px;
    height: 24px;
  }

  @media(min-width: 650px) {
    display: none;
  }
`;