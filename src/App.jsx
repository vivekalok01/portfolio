import { Outlet } from "react-router-dom"
import Header from "./pages/Header"
import Home from "./pages/Home"

function App() {
  

  return (
    <>
     <Header></Header>
     <Outlet></Outlet>
    </>
  )
}

export default App
