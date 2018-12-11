import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Index from './components/Index'
import Sites from './components/Sites';
import Midias from './components/Midias';
import Contact from './components/Contact';

class App extends Component {
  render() {
    document.title = "Progrinter - Desenvolvimento de Sites e Aplicativos"
    return (
      <BrowserRouter>
        <div className="App">
          {/* <Route path='/' exact component={Index} />
          <Route path='/sites' component={Sites} />
          <Route path='/midias' component={Midias} />
          <Route path='/contato' component={Contact} /> */}
          <Route path='/webmail' component={() => window.location = 'http://webmail.progrinter.com/'} />
          <Index />
          <div id='sites'>
            <Sites />
          </div>
          <div id='midias'>
            <Midias />
          </div>
          <div id='contato'>
            <Contact />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
