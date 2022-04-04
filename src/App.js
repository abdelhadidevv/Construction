import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Companies from "./components/Companies/Companies";
import Points from "./components/ChooseUs/Points";

import { CorneredImage } from "./components/ChooseUs/ChooseUs";
import choose_us from "./assets/choose_us.png";

import GlobalStyle, {
  AppContainer,
  Section,
  BgImageContainer,
  Container,
  TextHeader,
  HeaderSpan,
  Paragraph,
  Margin,
  MainButton,
  Heading2,
} from "./globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Section name="Header" pt="50px" pr="50px">
        <BgImageContainer>
          <Navbar />
          <Container pl="155px" pt="80px">
            <TextHeader>
              Masters
              <HeaderSpan>
                of <br />
                Consistency and
              </HeaderSpan>
              <br />
              Quality
              <HeaderSpan>.</HeaderSpan>
            </TextHeader>
            <Margin mt="40px" />
            <Paragraph>
              Blessing welcomed ladyship she met humoured sir <br />
              breeding her. Six curiosity day assurance bed necessary.
            </Paragraph>
            <Margin mt="40px" />
            <MainButton>Explore</MainButton>
            <Margin mr="15px" display />
            <MainButton outline>Contact Us</MainButton>
            <Margin mt="90px" />
            <Stats />
          </Container>
          <Companies />
        </BgImageContainer>
      </Section>
      <Section name="Why Choose us" pt="83px" pr="155px" pl="155px">
        <Container display="flex">
          <Container>
            <Paragraph>
              Blessing welcomed ladyship she met humoured sir <br />
              breeding her. Six curiosity day assurance bed necessary.
            </Paragraph>
            <Margin mt="30px" />
            <MainButton>Explore</MainButton>
          </Container>
          <Heading2>
            Why Choose us for
            <br />
            best construction
            <br />
            experience
          </Heading2>
        </Container>
        <Margin mt="116px" />
        <Container display="flex" height="850px">
          <CorneredImage src={choose_us} />
          <Points />
        </Container>
      </Section>
    </AppContainer>
  );
}

export default App;
