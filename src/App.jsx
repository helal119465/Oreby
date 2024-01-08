import Home from "./pages/Home"
import "slick-carousel/slick/slick.css"; 
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from "react-router-dom";
import RootLayout from "./component/layout/RootLayout";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleProduct from "./pages/SingleProduct";
function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="/shop/:productId" element={<SingleProduct/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
