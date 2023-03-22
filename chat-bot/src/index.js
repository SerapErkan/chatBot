import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "./firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./features/auth/Login";
import SingUp from "./features/auth/SingUp";
import NotFound from "./components/NotFound";
import "semantic-ui-css/semantic.min.css";

const rrfProps = {
  firebase,
  config: {
    userProfile: "users",
    enableLogging: false,
  },
  dispatch: store.dispatch,
};

const Root = () => {
  const dispatch = useDispatch();
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={App} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={SingUp} />
        <Route exact path="*" Component={NotFound} />
      </Routes>
    </Router>
  );
};
export default Root;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        {/* <App /> */}
        <Root />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
