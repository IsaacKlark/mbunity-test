import FormElement from "./Form";
import Phone from "../../icons/call.svg";
import Message from "../../icons/message.svg";
import Location from "../../icons/location.svg";
import { Wrapper, Logo, Main, Column, Column1, ColumnHead, InfoWrapper, Text, Links, CustomLink } from "./styles";

const Footer = () => {
  return <Wrapper>
    <Logo>Logo Here</Logo>
    <Main>
      <Column1>
        <ColumnHead>Reach us</ColumnHead>
        <InfoWrapper>
          <img src={Phone} alt="phone" />
          <Text>+1012 3456 789</Text>
        </InfoWrapper>
        <InfoWrapper>
          <img src={Message} alt="email" />
          <Text>demo@gmail.com</Text>
        </InfoWrapper>

        <InfoWrapper>
          <img src={Location} alt="email" />
          <Text>132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
        </InfoWrapper>
      </Column1>
      <Column>
        <ColumnHead>Company</ColumnHead>
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
        <CustomLink to="/blogs">Blogs</CustomLink>
      </Column>
      <Links>
        <Column>
          <ColumnHead>Legal</ColumnHead>
          <CustomLink to="/privacy-policy">Privacy Policy</CustomLink>
          <CustomLink to="/terms-and-service">Terms & Services</CustomLink>
          <CustomLink to="/terms-of-use">Terms of Use</CustomLink>
          <CustomLink to="/refund-policy">Refund Policy</CustomLink>
        </Column>
        <Column>
          <ColumnHead>Quick Links</ColumnHead>
          <CustomLink to="/techlabz-keybox">Techlabz Keybox</CustomLink>
          <CustomLink to="/downloads">Downloads</CustomLink>
          <CustomLink to="/forum">Forum</CustomLink>
        </Column>
      </Links>
      <FormElement />
    </Main>
  </Wrapper>
}

export default Footer;