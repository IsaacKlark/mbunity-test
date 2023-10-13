import Close from "../../icons/close.svg";
import { ReactComponent as ArrowDown } from "../../icons/arrow_down.svg";
import { ReactComponent as Avatar } from "../../icons/avatarMobile.svg";
import { ReactComponent as Shop } from "../../icons/shop.svg";
import {
  Wrapper, TopBlock, Logo, CloseButton, TextButton, TextLink, TextWrapper, ImageLink,
  ImageLinksWrapper
} from "./styles";
const MobileNavigation = ({ display, setDisplayMobileNav }) => {

  return (
    <Wrapper display={display}>
      <TopBlock>
        <Logo>Logo Here</Logo>
        <CloseButton type="button" onClick={() => setDisplayMobileNav(false)}>
          <img src={Close} alt="close" />
        </CloseButton>
      </TopBlock>
      <TextWrapper>
        <TextLink to="/home">
          Home
        </TextLink>
        <TextButton>
          Features
          <ArrowDown />
        </TextButton>
        <TextLink to="/blog">
          Blog
        </TextLink>
        <TextLink to="/shop">
          Shop
        </TextLink>
        <TextLink to="/about">
          About
        </TextLink>
        <TextLink to="/contacts">
          Contact
        </TextLink>
      </TextWrapper>
      <ImageLinksWrapper>
        <ImageLink to="/profile"><Avatar /></ImageLink>
        <ImageLink to="/profile"><Shop /></ImageLink>
      </ImageLinksWrapper>
    </Wrapper>
  )
}

export default MobileNavigation;