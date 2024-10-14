
import './App.css';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbari from './Pages/Navbari';
import Addproduct from './Pages/Addproduct';
import Electronics from './Pages/Electronics';
import Cosmetics from './Pages/Cosmetics';
import Grocery from './Pages/Grocery';
import Bathitem from './Pages/Bathitem';
import Accessories from './Pages/Accessories';
import Order from './Pages/Order';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Updatepwd from './Pages/Updatepwd';
import Mycart from './Pages/Mycart';
import Spproduct from './Pages/Spproduct';
import Buynow from './Pages/Buynow';
import Paymentpage from './Pages/Paymentpage';
import Home2 from './Pages/Home2';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Navbari /> */}
        <Routes>
          <Route index element={<Home2 />} />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/grocery" element={<Grocery />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/bathitem" element={<Bathitem />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/spproduct/:id" element={<Spproduct />} />

          <Route path="/order/:id" element={<Order />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/updatepassword" element={<Updatepwd />} />
          <Route path="/mycart" element={<Mycart />} />
          <Route path="/buynow:id" element={<Buynow />} />
          <Route path="/paymentpage/:id" element={<Paymentpage />} />


        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  );
}


export default App;
