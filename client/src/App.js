import { Route, Switch } from "react-router-dom";
import { AddUser } from "./pages/AddUser";
import { EditUser } from "./pages/EditUser";
import { NotFound } from "./pages/NotFound";
import { UserList } from "./pages/UserList";

function App() {
  return (
    <Switch>
      <Route path="/" component={UserList} exact />
      <Route path="/add-user" component={AddUser} exact />
      <Route path="/edit-user" component={EditUser} exact />
      <Route path="*" component={NotFound} exact />
    </Switch>
  );
}

export default App;
