import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './weather'
import Fortune from './fortune'
import Joke from './joke'
import Movies from './movies'
import GOT from './got'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        React Dashboard
      </div>
      <div className="container">
        <div className="widget">
          <Weather />
        </div>
        <div className="widget">
          <Fortune />
        </div>
        <div className="widget">
          <Joke />
        </div>
        <div className="widget">
          <Movies />
        </div>
        <div className="widget">
          <GOT />
        </div>
      </div>
    );
  }
}
export default App;
