
import styled from "styled-components";
import { Form, Field, ErrorMessage } from 'formik';

export const Wrapper = styled(Form)`
  max-width: 635px;
  padding-right: 40px;
  width: 100%;
  padding-top: 6px;
  position: relative;

  @media(max-width: 650px) {
    padding-right: 0;
    width: 278px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FieldsWrapper = styled.div`
  display: flex;
  column-gap: 39px;
  margin-top: 45px;
  position: relative;

  @media(max-width: 650px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    margin-top: 23px;
    row-gap: 0.95rem;
  }
`;

export const CustomField = styled(Field)`
  width: 100%;
  color: #000;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  height: 35px;
  border-bottom: 1px solid #8D8D8D;
  padding-bottom: 6px;

  &::placeholder {
    color: #8D8D8D;
  };

  &:hover {
    border-color: black;
  }
`;

export const FieldWrapper = styled.label`
  width: 100%;
  position: relative;

  &:hover {
    p {
      color: black;
    }
  }

  @media(max-width: 650px) {
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Text = styled.p`
  text-align: start;
  color: ${({filled}) => filled ? "black" : "#8D8D8D"};
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const Error = styled(ErrorMessage)`
  text-align: start;
  color: red;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  position: absolute;
  bottom: ${({bottom}) => bottom ? bottom : "-20px"};
`;

export const RadioHead = styled.h2`
  color: #000;
  margin-top: 45px;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.7rem;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 12px;
  text-align: start;

  @media(max-width: 650px) {
    margin-top: 1.3rem;
    margin-bottom: 9px;
  }
`;

export const RadioWrapper = styled.div`
  display: flex;
  column-gap: 1.05rem;
  margin-bottom: 48px;

  @media(max-width: 650px) {
    flex-wrap: wrap;
    row-gap: 15px;
    margin-bottom: 28px;
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;;
  position: relative;

  img {
    width: 0.65rem;
    height: 0.65rem;
    margin-top: 0.2rem;
  }
`;

export const EmptyRadio = styled.div`
  width: 0.65rem;
  height: 0.65rem;
  margin-top: 0.2rem;
`;

export const RadioText = styled.p`
  color: #000;
  font-family: 'Poppins-Regular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  @media(max-width: 650px) {
    white-space: nowrap;
  }
`;

export const Radio = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Button = styled.button`
  width: 214px;
  height: 54px;
  background-color: black;
  color: white;
  text-align: center;
  font-family: 'Poppins-Medium', sans-serif;
  font-size: 0.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 45px;
  border-radius: 5px;
  box-shadow: 0px 0px 0.7rem 0px rgba(0, 0, 0, 0.12);
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media(max-width: 650px) {
    margin-top: 24px;
    width: 278px;
    height: 38px;
    font-size: 0.65rem;
  }
`;

export const PlaneImage = styled.img`
  position: absolute;
  bottom: -50px;
  right: 123px;
  width: 267px;
  height: 220px;

  @media(max-width: 650px) {
    bottom: -88px;
    right: 123px;
    width: 121px;
    height: 105px;
  }
`;
