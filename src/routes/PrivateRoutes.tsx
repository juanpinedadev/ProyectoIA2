import { Route } from "react-router-dom"
import { LayoutDashboard } from "../dashboard/layouts/LayoutDashboard"
import { Home } from "../dashboard/pages/Home"
import { ModelPrivateRoutes } from "../models/routes"
import { RoutesWithNotFound } from "./routes-with-not-found"

const PrivateRoutes = () => {
  return (
    <RoutesWithNotFound>
      <Route path={ModelPrivateRoutes.DASHBOARD} element={<LayoutDashboard />}>
        <Route path={ModelPrivateRoutes.HOME} element={<Home />} />
      </Route>
    </RoutesWithNotFound>
  )
}


export default PrivateRoutes