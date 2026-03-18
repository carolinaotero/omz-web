import { createBrowserRouter } from "react-router";
import Home from "../imports/Home";
import Nosotros from "../pages/Nosotros";
import Hacemos from "../pages/Hacemos";
import Hablemos from "../pages/Hablemos";
import Equipo from "../pages/Equipo";
import EquipoDetalle from "../pages/EquipoDetalle";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/nosotros",
    Component: Nosotros,
  },
  {
    path: "/que-hacemos",
    Component: Hacemos,
  },
  {
    path: "/hablemos",
    Component: Hablemos,
  },
  {
    path: "/equipo",
    Component: Equipo,
  },
  {
    path: "/equipo/:slug",
    Component: EquipoDetalle,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);