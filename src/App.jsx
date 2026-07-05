
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import ProductDetails from "./pages/ProductDetails"

const App = () => {
  
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
        
      </Routes>
    </div>
  )
}

export default App
