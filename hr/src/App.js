import './App.css';
import {BrowserRouter,Switch ,Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Home from './components/Home';
import HeadBarPage from './components/HeadBarPage';
import SideBarPage from './components/SideBarPage';
import ShowData from './components/ShowData';
import AddUser from './components/AddUder';
import User from './components/User';
import CreatTask from './components/taskCreat';
import db2 from './components/db2';
import ViewTask from './components/ViewTask';
import AddProducr from './components/AddProducr';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

    <Switch>
    {/* https://www.youtube.com/watch?v=eJyZ7k6lWfE */}
    {/* https://www.youtube.com/watch?v=jnQ1-XW7KNY */}
      <Route path="/" exact component={LoginForm}></Route>
      <Route path="/Home"  exact component={Home} ></Route>
      <Route path="/SignUp"  exact component={SignUp} ></Route>
      
      <Route path="/ShowData"  exact component={ShowData} ></Route>
      <Route path="/AddUser"  exact component={AddUser} ></Route>      
      <Route path="/User"  exact component={User} ></Route>
      <Route path="/CreatTask"  exact component={CreatTask} ></Route>
      <Route path="/db2"  exact component={db2} ></Route>
      <Route path="/ViewTask" exact component={ViewTask}></Route>
      <Route path="/AddProducr" exact component={AddProducr}></Route>
  </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
