import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.section`
  position: absolute;
  background-color: black;
  width: 100%;
  transition: all 1s;
  height: 476px;
  top: ${({ display }) => display ? "0" : "-476px"};
  left: 0;
  z-index: 2;
  padding: 28px 20px 30px;

  @media(min-width: 650px) {
    display: none;
  }
`;

export const TopBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 52px;
`;

export const Logo = styled.p`
  font-family: 'Inter-Bold', sans-serif;
  color: white;
  font-size: 0.9rem;
  font-weight: 800;
  line-height: normal;
  margin-top: 1px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  
  img {
    width: 24px;
    height: 24px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 29.5px;
  width: max-content;
  margin-right: 61px;
  padding-left: 3px;
  margin-bottom: 60px;
`;

export const TextLink = styled(Link)`
  font-family: 'Roboto-Regular', sans-serif;
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
`;

export const TextButton = styled.button`
  font-family: 'Roboto-Regular', sans-serif;
  color: white;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: normal;
  width: max-content;
  display: flex;
  align-items: center;
  column-gap: 7px;
  margin-right: -5px;
  background-color: transparent;

  svg {
    width: 12px;
    height: 12px;

    path {
      fill: white;
    }
  }
`;

export const ImageLinksWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  column-gap: 36px;
`;

export const ImageLink = styled(Link)`
  width: 31px;
  height: 31.538px;
  flex-shrink: 0;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  svg {
    width: 0.9rem;
    height: 0.9rem;

    path {
      fill: white;
    };
  };
`