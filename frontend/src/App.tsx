import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register"
import Login from "./pages/Login"
import { useAuthContext } from "./context/AuthContext"
import PrivateRoutes from "./layouts/PrivateRoutes"
import GuestRoutes from "./layouts/GuestRoutes"
import { Toaster } from "react-hot-toast"

function App() {
  const {isLoading} = useAuthContext();
  if (isLoading) {
    return <h1>Loading....</h1>
  }

  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<GuestRoutes />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  )
}

export default App
