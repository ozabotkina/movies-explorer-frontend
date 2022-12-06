import React from "react";
import {
  Redirect,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import NavTab from "../NavTab/NavTab"
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";



function App() {

  const [loggedIn, setLoggedStatus] = React.useState(true);  
  
  return (
  <div className="page">
  <div className = "topSection"> 

    <Header
      colorClass = {loggedIn ? "header" : "header header_notlogged"}
      loggedIn = {loggedIn ? "true" : false}
     />
   {/* /* Видно только для loggedIn состояния и шире 800px экрана */}

    {loggedIn &&
       <Navigation/> }
  </div> 

    {/* <Main/>   */}
  


  <Switch>
    <Route
      path="/signin"
      component={Login}>
    </Route>
    <Route
      path="/signup"
      component={Register}>
    </Route>
    <Route
      path="/movies"
      component={Movies}>
    </Route>
    <Route
      path="/saved-movies"
      component={SavedMovies}>
    </Route>
    <Route
      path="/profile"
      component={Profile}>
    </Route>
    <Route
      exact path="/"
      component={Main}>
    </Route> 
  </Switch>

  <Footer/>
  </div> 
  );
}

export default withRouter(App);
