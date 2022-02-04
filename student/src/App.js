import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch ,Route } from 'react-router-dom';

import ShowData from './components/ShowData';


function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <Switch>
      <Route path="/"  exact component={ShowData} ></Route>
  </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
