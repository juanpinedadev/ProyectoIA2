import { Route, Routes } from "react-router-dom"

export const RoutesWithNotFound = ({ children }: { children: React.ReactNode }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div className="caret-blue-800 ">Ruta no encontrada</div>} />
    </Routes>
  )
}
