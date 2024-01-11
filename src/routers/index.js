import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import GetHelpCommu from "../pages/GetHelpCommu";
import Report from "../pages/Report";
import ListCommuSupport from "../pages/ListCommuSupport";
import EditGetHelpCommu from "../pages/EditGetHelpCommu";

function Routers() {
  // }
  return (
    <Switch>
      <Route exact path="/" component={ListCommuSupport} />
      <Route exact path="/gethelpcommu" component={GetHelpCommu} />
      <Route exact path="/home" component={Homepage} />
      <Route exact path="/report" component={Report} />
      <Route exact path="/edit" component={EditGetHelpCommu} />
    </Switch>
  );
}
export default Routers;
