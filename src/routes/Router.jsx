import { createBrowserRouter } from "react-router-dom";
import AddCountry from "../Pages/Country/AddCountry";
import PlaceByCountry from "../Pages/Country/PlaceByCountry";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/Register/SignIn";
import SignUp from "../Pages/Register/SignUp";
import AddSpot from "../Pages/TourestSpot/AddSpot";
import Details from "../Pages/TourestSpot/Details";
import MyList from "../Pages/TourestSpot/MyList";
import Places from "../Pages/TourestSpot/Places";
import UpdateSpot from "../Pages/TourestSpot/UpdateSpot";
import Root from "../Root/Root";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const [places, countries] = await Promise.all([
            fetch("https://tour-palic-server.vercel.app/home-places"),
            fetch("https://tour-palic-server.vercel.app/country"),
          ]);
          const homePlaces = await places.json();
          const country = await countries.json();

          return { homePlaces, country };
        },
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/addspot",
        element: (
          <PrivateRoute>
            <AddSpot></AddSpot>
          </PrivateRoute>
        ),
      },
      {
        path: "/places",
        element: <Places></Places>,
      },

      {
        path: "/details/:_id",
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://tour-palic-server.vercel.app/details/${params._id}`),
      },
      {
        path: "/places-email/:email",
        element: (
          <PrivateRoute>
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: "/places/:_id",
        element: <UpdateSpot></UpdateSpot>,
        loader: ({ params }) =>
          fetch(`https://tour-palic-server.vercel.app/details/${params._id}`),
      },
      {
        path: "/add-country",
        element: (
          <PrivateRoute>
            <AddCountry></AddCountry>
          </PrivateRoute>
        ),
      },
      {
        path: "/places-country/:country",
        element: <PlaceByCountry></PlaceByCountry>,
        loader: ({ params }) =>
          fetch(
            `https://tour-palic-server.vercel.app/places-country/${params.country}`
          ),
      },
    ],
  },
]);

export default router;
