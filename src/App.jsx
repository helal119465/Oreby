import RootLayout from "./component/layout/RootLayout";
import "slick-carousel/slick/slick.css"; 
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom";
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./component/Cart";
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/shop/:productId" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
