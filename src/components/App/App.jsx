import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import AboutPage from "../AboutPage/AboutPage";
import UserPage from "../UserPage/UserPage";
// import InfoPage from '../InfoPage/InfoPage';
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import ClientAccountPage from "../ClientAccountPage/ClientAccountPage";
import ClientProfilePage from "../ClientProfilePage/ClientProfliePage";
import AddNewClient from "../AddNewClient/AddNewClient";
import UpdateClientForm from "../UpdateClientForm/UpdateClientForm";
import WorkoutPage from "../WorkoutPage/WorkoutPage";
import UpdateWorkoutForm from "../UpdateWorkoutForm/UpdateWorkoutForm";
import AddNewWorkoutForm from "../AddNewWorkoutForm/AddNewWorkoutForm";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const [posts, setPosts] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  // useEffect(() => {
  //   getPosts().then(json => {
  //     setPosts(json)
  //     setSearchResults(json)
  //   })
  // }, [])

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          {/* <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute> */}

          <Route exact path="/login">
            {user.id ? (
              // If the user is already logged in,
              // redirect to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the login page
              <LoginPage />
            )}
          </Route>

          <Route exact path="/registration">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/user" />
            ) : (
              // Otherwise, show the registration page
              <RegisterPage />
            )}
          </Route>

          <Route exact path="/home">
            {user.id ? (
              // If the user is already logged in,
              // redirect them to the /user page
              <Redirect to="/ClientProfilePage" />
            ) : (
              // Otherwise, show the Landing page
              <LandingPage />
            )}
          </Route>
          <Route exact path="/ClientAccount/:id">
            <ClientAccountPage />
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route exact path="/ClientProfilePage">
            <ClientProfilePage />
          </Route>
          <Route exact path="/AddNewClient">
            <AddNewClient />
          </Route>
          <Route exact path="/UpdateClientForm/:id">
            <UpdateClientForm />
          </Route>
          <Route exact path="/WorkoutPage/:client_id">
            <WorkoutPage />
          </Route>
          <Route exact path="/UpdateWorkoutForm/:id/:client_id">
            <UpdateWorkoutForm />
          </Route>
          <Route exact path="/AddNewWorkout/:client_id">
            <AddNewWorkoutForm />
          </Route>
          {/* <SearchBar posts={posts} setSearchResults={setSearchResults} /> */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
