import Call from "../../icons/call.svg";
import Message from "../../icons/message.svg";
import Location from "../../icons/location.svg";
import { ReactComponent as Tweetter } from "../../icons/tweetter.svg";
import { ReactComponent as Discord } from "../../icons/discord.svg";
import { ReactComponent as Instagram } from "../../icons/instagram.svg";
import Circles from "../../icons/circles.svg";
import {
  Wrapper, Head, Text, TextMiddle, InfoWrapper, BottomWrapper, Link, CirclesImage,
  Img, Ellipse1Img, Ellipse2Img
} from "./styles";
import Ellipse1 from "../../icons/Ellipse 795.svg";
import Ellipse2 from "../../icons/Ellipse 796.svg";

const Info = () => {
  return (<Wrapper>
    <Head>Contact Information</Head>
    <TextMiddle>Say something to start a live chat!</TextMiddle>
    <InfoWrapper>
      <Img src={Call} alt="phone" />
      <Text>+1012 3456 789</Text>
    </InfoWrapper>
    <InfoWrapper>
      <img src={Message} alt="email" />
      <Text>demo@gmail.com</Text>
    </InfoWrapper>
    <InfoWrapper>
      <img src={Location} alt="location" />
      <Text>132 Dartmouth Street Boston, Massachusetts 02156 United States</Text>
    </InfoWrapper>
    <BottomWrapper>
      <Link href="https://tweetter.com"><Tweetter /></Link>
      <Link href="https://instagram.com"><Instagram /></Link>
      <Link href="https://discord.com"><Discord /></Link>
    </BottomWrapper>
    <CirclesImage src={Circles} alt="circles" />
    <Ellipse1Img src={Ellipse1} alt="" />
    <Ellipse2Img src={Ellipse2} alt="" />
  </Wrapper>)
}

export default Info;