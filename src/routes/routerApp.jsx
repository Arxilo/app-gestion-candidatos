import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import App from "../App";
import Candidates from "../pages/Candidates";
import Board from "../pages/Board";
import CreateCandidate from "../pages/CreateCandidate";

export let routerApp = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard/",
    element: <Dashboard />,
    children: [
      {
        path: "candidates",
        element: <Candidates />,
      },
      {
        path: "board",
        element: <Board />,
      },
      {
        path: "create-candidate",
        element: <CreateCandidate />,
      },
    ],
  },
];
