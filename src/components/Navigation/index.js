import Avatar from "../../icons/avatar.svg";
import Shop from "../../icons/shop.svg";
import ArrowDown from "../../icons/arrow_down.svg";
import {
  Nav, Logo, Wrapper, TextWrapper, TextLink, TextButton, ImagesWrapper, ImageLink,
  MenuButton
} from "./styles";
import MenuIcon from "../../icons/mobile_menu.svg";

const Navigation = ({ setDisplayMobileNav }) => {
  return (
    <Nav>
      <Logo>Logo Here</Logo>
      <Wrapper>
        <TextWrapper>
          <TextLink to="/home">
            Home
          </TextLink>
          <TextButton>
            Features
            <img src={ArrowDown} alt="open" />
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
        <ImagesWrapper>
          <ImageLink to="/profile"><img src={Avatar} alt="profile" /></ImageLink>
          <ImageLink to="/profile"><img src={Shop} alt="shop" /></ImageLink>
        </ImagesWrapper>
        <MenuButton type="button" onClick={() => setDisplayMobileNav(true)}><img src={MenuIcon} alt="menu" /></MenuButton>
      </Wrapper>
    </Nav>)
}

export default Navigation;