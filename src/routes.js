import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom5";


import Home from "./containers/Home"
import Users from "./containers/users"
function Routes(){

  return{
       
    <Router>
    
    <Route path="/"  component={Home}/>
    <Route path="/usuarios" component={users}/>
    
    </Router>

  }

}

export default Routes