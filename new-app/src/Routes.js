import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PagesPromotionSearch from "./pages/Promotion/Search";
import Form from "./components/form/Form";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={PagesPromotionSearch} />
        <Route exact path="/create" component={Form} />
        <Route exact path="/edit/:id" component={Form} />
      </Switch>
    </Router>
  );
}
