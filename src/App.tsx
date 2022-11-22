import React from 'react';
import NavbarApp from './components/navbar/navbar';
import { Container } from 'rsuite';
import {SectionOne, SectionThree, SectionTwoo} from './components/sections/sections';
function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <img className="effectBackground" src='https://dogstudio.co/app/themes/portfolio-2018/static/assets/images/menu/background-xxs.png'/>
      
      <Container >
        <SectionOne/>
        <SectionTwoo/>
        <SectionThree/>
      </Container>
    </div>
  );
}

export default App;
