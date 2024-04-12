import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from '../pages/Home/Home';
import NbAst from "../pages/NbAst/NbAst";
import NewPlanet from "../pages/NewPlanet/NewPlanet";
import Apod from "../pages/Apod/Apod";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "astronomy_photo_of_the_day",
                element: <Apod />
            },
            {
                path: "near_by_asteroids",
                element: <NbAst />
            },
            {
                path: "new_planets",
                element: <NewPlanet />
            }
        ]
    },
    

]);