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
  Heading3,
} from "./globalStyles";

import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Companies from "./components/Companies/Companies";
import Points from "./components/ChooseUs/Points";
import Engineer from "./components/Engineer/Engineer";

import { CorneredImage } from "./components/ChooseUs/ChooseUs";
import choose_us from "./assets/choose_us.png";
import { user1, user2, user3 } from "./assets/index";

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
          <Container pl="135px" pt="147px" pr="80px">
            <Companies />
          </Container>
        </BgImageContainer>
      </Section>
      <Section name="Why Choose us" pt="90px" pr="140px" pl="140px">
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
      <Section name="Our team" pt="137px" pr="135px" pl="135px">
        <Container display="flex" flexDr="column">
          <Heading3>Our Best Engineers</Heading3>
          <Margin mt="30px" />
          <Paragraph center width="672px">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </Paragraph>
        </Container>
        <Margin mt="80px" />
        <Container display="flex" flexDr="row" width="100%" overflow>
          <Engineer
            avatar={user1}
            username="Chris Evans"
            location="Michigan, TX"
            phone="989-653-2986"
            email="ChrisEvans@const.com"
          />
          <Engineer
            avatar={user3}
            username="James Kiara"
            location="Michigan, TX"
            phone="989-653-2986"
            email="JamesKiara@const.com"
          />
          <Engineer
            avatar={user2}
            username="Adam Gates"
            location="Michigan, TX"
            phone="989-653-2986"
            email="AdamGates@const.com"
          />
        </Container>
        <Margin mt="80px" />
      </Section>
    </AppContainer>
  );
}

export default App;
