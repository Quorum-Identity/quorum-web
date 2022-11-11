import React from 'react';
import NavbarApp from './components/navbar/navbar';
import { Container } from 'rsuite';
import * as Icon from 'react-feather';

function App() {
  return (
    <div className="App">
      <NavbarApp/>
      <Container >
        <div className='section-one'>
          <h1 className='first-title'> CRAFTERS</h1>
          <span>TRY NOW</span>
        </div>

        <div className='arrow-back'>
          <h1>DOWN</h1>
          <Icon.ArrowDown color='#212035'/>
        </div>

        <div className='div-ripped'>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          <h1>aaa</h1>
          
        </div>

      </Container>
    </div>
  );
}

export default App;
