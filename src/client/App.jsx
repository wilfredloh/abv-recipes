import React from 'react';
import { hot } from 'react-hot-loader';

import Counter from './components/counter/counter';
import Form from './components/form/form';
import Index from './components/Index/Index';

  // React Router Stuff
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'hello',
    };
    // this.clickHandler = this.clickHandler.bind(this);

  }

  componentDidMount() {

  }

  // clickHandler(){
  //   console.log('clciked!!!')
  //   setTimeout(()=>{
  //     this.props.history.push('/bananas');
  //   },1000);
  // }

  render() {
    return (
      <BrowserRouter>

        <div>
          <nav>
            <h1>React Router</h1>
            <Link to="/">Index</Link>
            <Link to="/bananas">Bananas</Link>
            <Link to="/oranges">Oranges</Link>
          </nav>

          <main>
            <Route
              exact path='/'
              render={() => (
                <Index/>
                // <p>Bannaanana</p>
              )}
            />
            <Route
              path='/bananas'
              render={() => (
                <Counter/>
                // <p>Bannaanana</p>
              )}
            />
            <Route
              path='/oranges'
              render={() => (
                <Form/>
                // <p>OREN</p>
              )}
            />
          </main>
        </div>

      </BrowserRouter>

    );
  }
}

export default hot(module)(App);
