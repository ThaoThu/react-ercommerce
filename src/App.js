import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import configureStore from "./redux/store/index";
import Authen from "./services/api/authen";
import Config from "./services/config";
import Permissions from "./services/user-permission.service";
import { history } from "./utils/history";

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Loading...</div>
);
const Layout = React.lazy(() =>
  import("./containers/layout-containers/Layout")
);
const Login = React.lazy(() => import("./views/Pages/Login"));
const ForgotPass = React.lazy(() => import("./views/Pages/ForgotPass"));
const { store, persistor } = configureStore();

class App extends Component {
  componentDidMount() {
    this.initServiceAndCheck();
  }
  async initServiceAndCheck() {
    const config = Config.getInstance();
    const authen = Authen.getInstance();
    const permisson = Permissions.getInstance();
    await Promise.all([
      config.initConfig(),
      authen.initAuthen(),
      permisson.initPermisson(),
    ]);
  }

  render() {
    return (
      <Provider store={store}>
        <React.Suspense fallback={loading()}>
          <Router history={history}>
            <Switch>
              <Route
                exact
                path="/login"
                render={(props) => <Login {...props} />}
              />
              <Route
                exact
                path="/forgot-pass"
                render={(props) => <ForgotPass {...props} />}
              />

              <Route
                path="/"
                name="Home"
                render={(props) => <Layout {...props} />}
              />
            </Switch>
          </Router>
        </React.Suspense>
      </Provider>
    );
  }
}

export default App;
