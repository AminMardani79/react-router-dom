import { useRoutes, Outlet } from "react-router-dom";
function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <div>
          Home <Outlet />
        </div>
      ),
      children: [
        {
          index: true,
          element: <div>Home content</div>,
        },
        {
          path: "/login",
          element: <div>Login</div>,
        },
        {
          path: "/settings",
          element: <div>Settings</div>,
        },
        {
          path: "/dashboard",
          element: <div>Dashboard</div>,
        },
      ],
    },
  ]);

  return routes;
}

export default App;
