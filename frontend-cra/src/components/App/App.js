import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { ProtectedRoute, EntranceRoute } from "../ProtectedRoute";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import PageNotFound from "../PageNotFound/PageNotFound";
import {
  getMovies,
  removeMovie,
  addMovie,
  checkToken,
  signout,
  getCurrentUser,
} from "../../utils/MainAPI";
import { MyMoviesContext } from "../../context/DataBasesContext";
import { CurrentUserContext } from "../../context/CurrentUserContext";
import { LoggedContext } from "../../context/LoggedContext";

function App(props) {
  const [isNavigationOpen, setNavigation] = React.useState(false);
  const [loggedIn, setLoggedStatus] = React.useState(
    JSON.parse(localStorage.getItem("logged"))
  );
  const [myMovies, setMyMovies] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState(
    localStorage.getItem("currentUser")
  );
  const [showFooter, setFooter] = React.useState(false);
  const [showHeader, setHeader] = React.useState(false);
  // const [isErrorOpen, setErrorStatus] = React.useState(false);

  function handleLogin() {
    setLoggedStatus(true);
    getCurrentUser()
      .then((res) => {
        setCurrentUser(res);
        localStorage.setItem("currentUser", res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleLogout() {
    signout()
      .then(() => {
        setLoggedStatus(false);
        localStorage.clear();
        localStorage.setItem("logged", "false");
        setMyMovies("");
      })

      .catch((err) => console.log(err));
  }

  function handleUserUpdate(data) {
    setCurrentUser(data);
  }

  function likeMovie(card) {
    addMovie(card)
      .then((card) => {
        setMyMovies([card, ...myMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function unlikeMovie(cardId) {
    removeMovie(cardId)
      .then(() => {
        setMyMovies((state) =>
          state.filter((c) => (c._id !== cardId ? c : ""))
        );
      })

      .catch((err) => {
        console.log(err);
      });
  }

  function tokenCheck() {
    checkToken()
      .then((data) => {
        setLoggedStatus(true);
        localStorage.setItem("logged", "true");
      })
      .catch((err) => console.log(err));
  }

  // Верстка разных страниц

  function requestFooter() {
    setFooter(true);
  }
  function hideFooter() {
    setFooter(false);
  }

  function requestHeader() {
    setHeader(true);
  }
  function hideHeader() {
    setHeader(false);
  }

  function handleShortMenu() {
    setNavigation(true);
  }
  function handleNavClose() {
    setNavigation(false);
  }

  React.useEffect(() => tokenCheck(), []);
  React.useEffect(() => tokenCheck(), [loggedIn]);

  React.useEffect(() => {
    getCurrentUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });

    getMovies()
      .then((data) => {
        setMyMovies(Array.from(data));
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  React.useEffect(() => {
    getMovies()
      .then((data) => {
        setMyMovies(Array.from(data));
        return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentUser]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <MyMoviesContext.Provider value={myMovies}>
        <LoggedContext.Provider value={loggedIn}>
          <div className="page">
            <div className="page__top-section">
              <Header
                withHeader={showHeader}
                loggedIn={loggedIn}
                colorClass={loggedIn ? "header" : "header header_notlogged"}
                shortMenuClick={handleShortMenu}
              />
            </div>

            <Switch>
              <Route exact path="/">
                <Main setFooter={requestFooter} setHeader={requestHeader} />
              </Route>

              <EntranceRoute
                path="/signin"
                component={Login}
                handleLogin={handleLogin}
                setFooter={hideFooter}
                setHeader={hideHeader}
              ></EntranceRoute>

              <EntranceRoute
                path="/signup"
                component={Register}
                handleLogin={handleLogin}
                setFooter={hideFooter}
                setHeader={hideHeader}
              ></EntranceRoute>

              <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                component={Movies}
                setFooter={requestFooter}
                setHeader={requestHeader}
                onLike={likeMovie}
                onDelete={unlikeMovie}
                myMоvies={myMovies}
              ></ProtectedRoute>

              <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                component={SavedMovies}
                setFooter={requestFooter}
                setHeader={requestHeader}
                onDelete={unlikeMovie}
                myMоvies={myMovies}
              ></ProtectedRoute>

              <ProtectedRoute
                path="/profile"
                loggedIn={loggedIn}
                component={Profile}
                onExit={handleLogout}
                onUpdateUser={handleUserUpdate}
                setFooter={hideFooter}
                setHeader={requestHeader}
              ></ProtectedRoute>

              <Route path="*">
                {" "}
                <PageNotFound />
              </Route>
            </Switch>

            <Footer withFooter={showFooter} />

            <Navigation
              isOpen={isNavigationOpen}
              onCloseClick={handleNavClose}
            />
            {/* <ErrorAPI isOpen={isErrorOpen} /> */}
          </div>
        </LoggedContext.Provider>
      </MyMoviesContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
