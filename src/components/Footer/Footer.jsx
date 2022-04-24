import {
  FooterContainer,
  ColumnContainer,
  Copyright,
  FooterTitle,
  Line,
  Link,
  LinksTitle,
  RowContainer,
  SocialIcon,
  Text,
  InputEmail,
  InputContainer,
} from "./FooterStyles";
import { Margin } from "../../globalStyles";
import { facebook, twitter, linkedin } from "../../assets/index";
import { ReactComponent as Send } from "../../assets/send.svg";

export default function Footer() {
  return (
    <FooterContainer>
      <RowContainer>
        <ColumnContainer>
          <FooterTitle>CONSTRUCTION</FooterTitle>
          <Margin mb="30px" />
          <Text>
            You’ll find your next
            <br /> Home loan valu you prefer.
          </Text>
          <Margin mb="40px" />
          <RowContainer width="117px">
            <SocialIcon src={facebook} />
            <SocialIcon src={twitter} />
            <SocialIcon src={linkedin} />
          </RowContainer>
        </ColumnContainer>

        <ColumnContainer>
          <LinksTitle>Resources</LinksTitle>
          <Margin mb="36px" />
          <Link>Our Agents</Link>
          <Margin mb="18px" />
          <Link>Member Stories</Link>
          <Margin mb="18px" />
          <Link>Video</Link>
          <Margin mb="18px" />
          <Link>Free trial</Link>
        </ColumnContainer>

        <ColumnContainer>
          <LinksTitle>Company</LinksTitle>
          <Margin mb="36px" />
          <Link>Patnerships</Link>
          <Margin mb="21px" />
          <Link>Terms of use</Link>
          <Margin mb="21px" />
          <Link>Privacy</Link>
          <Margin mb="21px" />
          <Link>Sitemap</Link>
        </ColumnContainer>

        <ColumnContainer>
          <LinksTitle>Get in touch</LinksTitle>
          <Margin mb="36px" />
          <InputEmailSend />
        </ColumnContainer>
      </RowContainer>
      <Margin mb="68px" />
      <Line />
      <Margin mb="40px" />
      <Copyright>Copyright construction.com, All rights reserved.</Copyright>
    </FooterContainer>
  );
}

export const InputEmailSend = () => {
  return (
    <InputContainer>
      <InputEmail placeholder="Enter your mail" />
      <Send width="16px" height="16px" />
    </InputContainer>
  );
};
