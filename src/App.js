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
          <Route path='/' exact component={Index} />
          <Route path='/sites' component={Sites} />
          <Route path='/midias' component={Midias} />
          <Route path='/contato' component={Contact} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
