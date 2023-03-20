import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import firebase from "./firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { useDispatch, useSelector } from "react-redux";

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
  return <div></div>;
};
export default Root;

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
