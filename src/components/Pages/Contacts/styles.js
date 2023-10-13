import styled from "styled-components";

export const Head = styled.h1`
  font-family: 'Poppins-Bold', sans-serif;
  color: #000;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  text-align: center;

  @media(max-width: 650px) {
    font-size: 24px;
  }
`;

export const Text = styled.p`
  color: #717171;
  text-align: center;
  font-family: 'Poppins-Medium',sans-serif;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 9px;

  @media(max-width: 650px) {
    font-size: 0.7rem;
    width: 190px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Main = styled.div`
  display: flex;
  margin: 50px auto;
  padding: 0.5rem;;
  justify-content: center;
  column-gap: 50px;

  @media(max-width: 650px) {
    flex-direction: column;
    margin: 15px auto 103px;
  }
`;