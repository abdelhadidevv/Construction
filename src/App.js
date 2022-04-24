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

import {
  ContainerControl,
  ControlBtn,
  Icon,
  CeoContainer,
  OpacityLayer,
  CeoTitle,
  CeoIcon,
  CeoMessage,
  Input,
  InputArea,
  MapImage,
} from "./AppStyles";

import {
  user1,
  user2,
  user3,
  next,
  back,
  coition_l,
  coition_r,
  map,
  blog1,
  blog2,
  next1,
  choose_us,
} from "./assets/index";

import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Companies from "./components/Companies/Companies";
import Points from "./components/ChooseUs/Points";
import Engineer from "./components/Engineer/Engineer";
import Footer from "./components/Footer/Footer";
import Blog, { Slider } from "./components/Blog/Blog";
import { CorneredImage } from "./components/ChooseUs/ChooseUs";

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
            username="James Kara"
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
        <Container display="flex" flexDr="column" width="100%" overflow>
          <ContainerControl>
            <ControlBtn>
              <Icon src={back} />
            </ControlBtn>
            <ControlBtn color>
              <Icon src={next} />
            </ControlBtn>
          </ContainerControl>
        </Container>
      </Section>
      <Section name="Message from CEO" pt="140px">
        <CeoContainer>
          <OpacityLayer>
            <CeoTitle>Message from CEO</CeoTitle>
            <CeoIcon src={coition_l} alignSelf />
            <CeoMessage>
              Shewing met parties gravity husband sex pleased. On to no kind do
              next feel held walk. Last own loud and knew give gay four.
              Sentiments motionless or principles preference excellence am.
              Literature surrounded insensible at indulgence or to admiration
              remarkably. Matter future lovers desire marked boy use. Chamber
              reached do he nothing be.
              <br />
              <br />
              Do in laughter securing smallest sensible no mr hastened. As
              perhaps proceed in in brandon of limited unknown greatly.
              Distrusts fulfilled happiness unwilling as explained of difficult.
              No landlord of peculiar ladyship attended if contempt ecstatic.
              Loud wish made on is am as hard. Court so avoid in plate hence. Of
              received mr breeding concerns peculiar securing landlord. Spot to
              many it four bred soon well to. Or am promotion in no departure
              abilities. Whatever landlord yourself at by pleasure of children
              be.
            </CeoMessage>
            <CeoIcon src={coition_r} />
          </OpacityLayer>
        </CeoContainer>
      </Section>
      <Section name="Contact Us" pl="67px" pr="67px" pt="140px">
        <Container display="flex" flexDr="column">
          <Heading3>Contact Us</Heading3>
          <Margin mt="30px" />
          <Paragraph center width="672px">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </Paragraph>
        </Container>
        <Margin mt="80px" />
        <Container display="flex" flexDr="row">
          <Container display="flex" flexDr="column">
            <Input placeholder="Name" />
            <Margin mt="20px" />
            <Input placeholder="Email" />
            <Margin mt="20px" />
            <Input placeholder="Subject" />
            <Margin mt="20px" />
            <InputArea placeholder="Massage" />
            <Margin mt="53px" />
            <MainButton alignSelf>Send Massage</MainButton>
          </Container>
          <Margin mr="30px" display />
          <MapImage src={map} />
        </Container>
      </Section>
      <Section name="Blogs" pl="144px" pr="144px" pt="140px">
        <Container display="flex" flexDr="column">
          <Heading3>Latest Blogs</Heading3>
          <Margin mt="30px" />
          <Paragraph center width="672px">
            Blessing welcomed ladyship she met humoured sir breeding her. Six
            curiosity day assurance bed necessary.
          </Paragraph>
          <Margin mt="80px" />
        </Container>
        <Container display="flex" flexDr="row" justify="center">
          <Blog img={blog1} />
          <Margin mr="60px" />
          <Blog img={blog2} />
          <Margin mr="90px" />
          <Slider />
        </Container>
      </Section>
      <Section name="Newsletter" pl="144px" pr="144px" pt="140px">
        <Container display="flex" flexDr="column">
          <Heading3>
            Subscribe to our <br /> Newsletter
          </Heading3>
          <Margin mt="30px" />
          <Paragraph center width="556px">
            Age sold some full like rich new. Amounted repeated as believed in
            confined juvenile.
          </Paragraph>
          <Margin mt="40px" />
          <MainButton Icon width height>
            SUBSCRIBE <Margin mr="20px" />
            <Icon src={next1} />
          </MainButton>
        </Container>
      </Section>
      <Section name="Footer" pl="155px" pr="155px" pt="160px" pb="36px">
        <Footer />
      </Section>
    </AppContainer>
  );
}

export default App;
