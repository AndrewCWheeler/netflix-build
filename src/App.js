import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {
  setLoadingTrue,
  setLoadingFalse,
  selectLoadingState,
} from './features/loadingSlice';
import ProfileScreen from './screens/ProfileScreen';
import LoadingScreen from './screens/LoadingScreen';
function App() {
  const user = useSelector(selectUser);
  const loading = useSelector(selectLoadingState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingTrue(true));
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
      dispatch(setLoadingFalse(false));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className='app'>
      {loading ? (
        <LoadingScreen />
      ) : (
        <Router>
          {!user ? (
            <LoginScreen />
          ) : (
            <Switch>
              <Route path='/profile'>
                <ProfileScreen />
              </Route>
              <Route exact path='/'>
                <HomeScreen />
              </Route>
            </Switch>
          )}
        </Router>
      )}
    </div>
  );
}

export default App;
