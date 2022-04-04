import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Companies from "./components/Companies/Companies";

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
} from "./globalStyles";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Section title="main" pt="50px" pr="50px">
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
    </AppContainer>
  );
}

export default App;
