import { Route } from "react-router-dom"
import { LayoutDashboard } from "../dashboard/layouts/LayoutDashboard"
import { Home } from "../dashboard/pages/Home"
import { ModelPrivateRoutes } from "../models/routes"
import { RoutesWithNotFound } from "./routes-with-not-found"
import { Algoritmo } from "@/dashboard/pages/Algoritmo"

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path={ModelPrivateRoutes.DASHBOARD} element={<LayoutDashboard />}>
        <Route index element={<Home />} />
        <Route path={ModelPrivateRoutes.HOME} element={<Home />} />
        <Route path={ModelPrivateRoutes.ALGORITMO} element={<Algoritmo />} />
      </Route>
    </RoutesWithNotFound>
  )
}


export default PrivateRoutes