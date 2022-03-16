import './App.css';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from "react-router-dom";
import Home from './components/Home';

const ComponentePai = (props) => {
  return (
    <div>
      <p>title</p>
      {props.children}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className='main'>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
        <ComponentePai>
          <p>SUPIMPA</p>
        </ComponentePai>
        <BrowserRouter>
          <Route path='/home' component={Home} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
