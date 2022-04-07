import { AddUser } from "./pages/AddUser";
import { EditUser } from "./pages/EditUser";
import { NotFound } from "./pages/NotFound";
import { UserList } from "./pages/UserList";

const routes = () => [
  {
    path: "/",
    element: <UserList />,
  },
  {
    path: "/add-user",
    element: <AddUser />,
  },
  {
    path: "/edit-user",
    element: <EditUser />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
