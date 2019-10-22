import React, {Component} from 'react';
import './App.css';
import Login from './components/login'

class App extends Component {
  render(){
    return (
      <div className="container">
        <Login />
      </div>
    );
  }
}

export default App;
