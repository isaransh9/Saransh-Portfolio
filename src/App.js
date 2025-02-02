// In this file, we will import all the main components and render them
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Project from "./components/Project";
import Error from "./components/Error";
import ContactMe from "./components/ContactMe";
import ThankYou from "./components/ThankYou";
import Background from "./components/Background";

const App = () => {
  return (
    <div className="main-div">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/project",
        element: (
          <div>
            <Project />
            <ContactMe />
            <ThankYou />
            <Background />
          </div>
        ), // Render both Project and ContactMe components
      },
      {
        path: "/contact",
        element: (
          <div>
            <ContactMe />
            <ThankYou />
            <Background />
          </div>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
