import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled.footer`
  width: 100%;
  background-color: black;
  padding: 80px 80px 43px;

  @media(max-width: 650px) {
    padding: 0.9rem 20px 35px;
  }
`;

export const Logo = styled.div`
  width: 100%;
  padding-bottom: 45px;
  color: white;
  font-family: "Inter-Bold", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
  border-bottom: 1px solid white;
  
  @media(max-width: 650px) {
    padding-left: 28px;
    padding-bottom: 1.1rem;
  }
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media(max-width: 650px) {
  }
`;

export const ColumnHead = styled.p`
  margin-top: 30px;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3rem;
  color: white;
  margin-bottom: 20px;
  text-align: start;

  @media(max-width: 650px) {
    font-size: 0.8rem;
    margin-bottom: 12px;
  }
`;

export const Column1 = styled.div`
  padding-left: 20px;
  margin-right: 0.2rem;

  @media(max-width: 650px) {
    padding-left: 0px;
    margin-right: 0px;
  }
`;

export const Column = styled.div`
  padding-left: 20px;
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  margin-right: 41px;

  @media(max-width: 650px) {
    padding-left: 0px;
    margin-right: 0px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 25px;
  margin-bottom: 24px;

  img {
    width: 24px;
    height: 24px;
  }

  @media(max-width: 650px) {
    flex-direction: column;
    row-gap: 9px;
    margin-bottom: 0.8rem;

    img {
      position: relative;
      left: -3px;
    }
  }
`;

export const Text = styled.p`
  font-family: 'Poppins-Regular', sans-serif;
  color: white;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  max-width: 309px;

  @media(max-width: 650px) {
    font-size: 12px;
    max-width: 163px;
  }
`

export const CustomLink = styled(Link)`
  font-family: 'Poppins-Regular', sans-serif;
  color: white;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;
  text-decoration: none;
  white-space: nowrap;
  margin-bottom: 24px;

  @media(max-width: 650px) {
    font-size: 12px;
    margin-top: 6px;
    margin-bottom: 0.7rem;
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 55px;

  @media(max-width: 650px) {
    margin-right: 0;
    justify-content: space-between;
    width: 100%;
    margin-top: -0.8rem;
  }
`;