import React from 'react';
import NavBar from "./components/nav-bar/navBar"
import Home from "./components/home/home"
import store from './components/redux/store'
import { Provider } from "react-redux";
import {Route,Switch} from "react-router-dom";
import SingIn from "./components/user/singin"
import SingUp from "./components/user/singup"
import BookDetails from "./components/book-details/bookdetails";
import Libarary from "./components/user/Libarary/libarary";
import Profile from "./components/user/profile";
import PageNotFound from"./components/pagenotfound/pagenotfound";

function App() {
  return (
    <div className="App">
      {/* <Provider srore={store}> */}
        <NavBar/>
        <Switch>
          <Route path="/user/library/:id"  component={Libarary}/>
          <Route path="/user/profile/:id"  component={Profile}/>
          <Route path="/book/:id"  component={BookDetails}/>
          <Route path="/singin"  component={SingIn}/>
          <Route path="/singUp"  component={SingUp}/>
          <Route path="/" component={Home}/>
          <Route path="*" component={PageNotFound}/>
          </Switch>

        {/* </Provider> */}
    </div>
  );
}

export default App;
