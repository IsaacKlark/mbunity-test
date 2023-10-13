import styled from "styled-components";

export const Wrapper = styled.div`
  width: 491px;
  height: 647px;
  flex-shrink: 0;
  background-color: black;
  padding: 40px 40px 36px;
  position: relative;
  border-radius: 0.5rem;;
  overflow: hidden;

  @media(max-width: 650px) {
    width: 310px;
    height: 397px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6px;
    padding: 0.8rem 40px 36px;
  }
`;

export const Head = styled.h2`
  color: white;
  font-family: "Poppins-Medium", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 6px;
  text-align: start;
  letter-spacing: 0.15px;

  @media(max-width: 650px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const TextMiddle = styled.p`
  color: white;
  font-family: "Poppins-Regular", sans-serif;
  color: #C9C9C9;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 111px;
  text-align: start;

  @media(max-width: 650px) {
    font-size: 11px;
    text-align: center;
    margin-bottom: 0.65rem;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  column-gap: 25px;
  margin-bottom: 50px;

  img {
    width: 24px;
    height: 24px;
  }

  @media(max-width: 650px) {
    flex-direction: column;
    row-gap: 9px;
    margin-bottom: 15px;
    align-items: center;
  }
`;

export const Text = styled.p`
  color: white;
  color: #FFF;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-family: "Poppins-Regular", sans-serif;
  max-width: 298px;
  text-align: start;

  @media(max-width: 650px) {
    flex-direction: column;
    font-size: 12px;
    text-align: center;
  }
`;

export const CirclesImage = styled.img`
  height: 210px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 208px;

  @media(max-width: 650px) {
    display: none;
  }
`;

export const Ellipse1Img = styled.img`
  height: 101px;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 81px;

  @media(min-width: 650px) {
    display: none;
  }
`;

export const Ellipse2Img = styled.img`
  height: 54px;
  position: absolute;
  bottom: 52px;
  right: 1.3rem;
  width: 54px;

  @media(min-width: 650px) {
    display: none;
  }
`;

export const BottomWrapper = styled.div`
  bottom: 0;
  left: 0;
  display: flex;
  column-gap: 24px;
  margin-top: 159px;

  @media(max-width: 650px) {
    margin-top: 58px;
    justify-content: center;
  }
`;

export const Link = styled.a`
  svg {
    width: 30px;
    height: 30px;

    circle {
      fill: #1B1B1B;
    }

    path {
      fill: white;
    }
  }

  &:hover {
    cursor: pointer;

    svg circle {
      fill: white;
    }

    svg path {
      fill: black;
    }
  }
`;

export const Img = styled.img`
  @media(max-width: 650px) {
    margin-right: 0.5rem;;
  }
`;