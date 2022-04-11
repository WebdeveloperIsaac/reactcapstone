
import { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div >
      <Main></Main>
    </div>
    </BrowserRouter>
  );
}
}

export default App;
