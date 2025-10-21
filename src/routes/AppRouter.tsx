import { BrowserRouter, Route } from "react-router-dom"
import { RoutesWithNotFound } from "./routes-with-not-found"
import PrivateRoutes from "./PrivateRoutes"
import { ModelPrivateRoutes } from "@/models/routes"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <RoutesWithNotFound>
            <Route path={`${ModelPrivateRoutes.PRIVATE}/*`} element={<PrivateRoutes />} />
        </RoutesWithNotFound>
    </BrowserRouter>
  )
}
