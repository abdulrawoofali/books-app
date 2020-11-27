import React from 'react';
import NavBar from "./components/Header/navBar"
import Home from "./components/body/home/home"
import {Route,Switch} from "react-router-dom";
import SingIn from "./components/user/singin"
import SingUp from "./components/user/singup"
import BookDetails from "./components/body/book-details/bookdetails";
import Libarary from "./components/user/Libarary/libarary";
import Profile from "./components/user/profile";
import PageNotFound from"./components/body/pagenotfound/pagenotfound";

function App(props) {
  return (
    <div className="App">
     
        <NavBar/>
        <Switch>
          <Route path="/user/library/:id"  component={Libarary}/>
          <Route path="/user/profile/:id"  component={Profile}/>
          <Route path="/book/:id"  component={BookDetails}/>
          <Route path="/singin"  component={SingIn}/>
          <Route path="/singUp"  component={SingUp}/>
          <Route path="/" exact component={Home}/>
          <Route path="*" component={PageNotFound}/>
          </Switch>
          


    </div>
  );
}

export default App;
