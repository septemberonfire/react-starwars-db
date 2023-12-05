import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainPage from "./components/MainPage.jsx";
import People from "./components/People.jsx";
import Planets from "./components/Planets.jsx";
import Starships from "./components/Starships.jsx";
import Layout from "./components/Layout.jsx";
import './styles/app.css'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />
        },
        {
          path: 'planets',
          element: <Planets />
        },
        {
          path: 'people',
          element: <People />
        },
        {
          path: 'starships',
          element: <Starships />
        },
      ]
    },
    {
      path: "*",
      element: <div>404</div>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
