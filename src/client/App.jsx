import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/Form/Form';
import Index from './components/Index/Index';

  // React Router Stuff
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
      arr: [
        'recipe1',
        'refcaa2',
        'dasdads'
      ]
    };

  }

  componentDidMount() {

  }

  render() {
    return (
      <BrowserRouter>


          <nav>
            <Link to="/"><h1>abillionveg</h1></Link>
          </nav>

          <main>
            <Route
              exact path='/'
              render={() => (
                <Index arr={this.state.arr} />
              )}
            />
         
            <Route
              path='/new'
              render={() => (
                <Form/>
              )}
            />
          </main>


      </BrowserRouter>

    );
  }
}

export default hot(module)(App);
