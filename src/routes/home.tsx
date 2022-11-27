import { Container } from "rsuite";
import FooterApp from "../components/footer/footer";
import NavbarApp from "../components/navbar/navbar";
import { SectionOne, SectionThree, SectionTwoo } from "../components/sections/sections";

const Home = () => {
    return (
      <div className="App">
        <NavbarApp/>
        <img className="effectBackground" src='https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/menu/background-xxs.png'/>
        
        <Container >
          <SectionOne/>
          <SectionTwoo/>
          <SectionThree/>
        </Container>
        <FooterApp/>
      </div>
    );
  }
  
export default Home;
  