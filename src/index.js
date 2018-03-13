import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Puzzle from './components/puzzle';

const App = () => {
  return (
    <div>    
      <Puzzle />
    </div>)
}


ReactDOM.render(<App />, document.getElementById('root'));
