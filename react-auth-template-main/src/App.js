import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/views/Login";
import Register from "./components/views/Register";
import Forgot from "./components/views/Forgot";
import Forgot1 from "./components/views/Forgot1";

const Auth = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/forgot-password' component={Forgot} />
        <Route path='/' component={Login} />
        <Route path='/dashboard' component={Forgot1} />
      </Switch>
    </Router>
  );
}

export default Auth;
