import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import { currentUser } from "../../utils/currentUser";
import ErrorAPI from "../ErrorAPI/ErrorAPI";


function App() {
  const [isNavigationOpen, setNavigation] = React.useState(false);
  const loggedIn = true;
  const isErrorOpen = false;
  const isSearching = false;
  // const [isErrorOpen, setErrorStatus] = React.useState(false);
  // const [loggedIn, setLoggedStatus] = React.useState(true);
  // const [isSearching, setSearchStatus] = React.useState(true);


  function handleShortMenu() {
    setNavigation(true);
  }

  function handleNavClose() {
    setNavigation(false);
  }

  return (
    <div className="page">
      <div className="topSection">
        <Header
          colorClass={loggedIn ? "header" : "header header_notlogged"}
          loggedIn={loggedIn ? true : false}
          shortMenuClick={handleShortMenu}
        />
      </div>

      <Switch>
        <Route path="/signin">
          <Login />
        </Route>

        <Route path="/signup">
          <Register />
        </Route>

        <Route path="/movies">
          <Movies 
            isSearching = {isSearching} />
          <Footer />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Profile user={currentUser} />
        </Route>

        <Route exact path="/">
          <Main />
          <Footer />
        </Route>
      </Switch>

      <Navigation isOpen={isNavigationOpen} onCloseClick={handleNavClose} />
      <ErrorAPI isOpen={isErrorOpen}/>

    </div>

  );
}

export default withRouter(App);
