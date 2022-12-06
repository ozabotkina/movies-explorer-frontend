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

function App() {
  const [loggedIn, setLoggedStatus] = React.useState(true);

  return (
    <div className="page">
      <div className="topSection">
        <Header
          colorClass={loggedIn ? "header" : "header header_notlogged"}
          loggedIn={loggedIn ? "true" : false}
        />
        {/* /* Видно только для loggedIn состояния и шире 800px экрана */}

        {loggedIn && <Navigation />}
      </div>


      <Switch>
        <Route path="/signin">
           <Login />
        </Route>

        <Route path="/signup">
           <Register />
        </Route>

        <Route path="/movies">
           <Movies />
           <Footer />
        </Route>

        <Route path="/saved-movies">
          <SavedMovies />
          <Footer />
        </Route>

        <Route path="/profile">
          <Profile user = {currentUser}/>
        </Route> 
           
        <Route exact path="/">
           <Main />
           <Footer />
        </Route>
      </Switch>

    </div>
  );
}

export default withRouter(App);
