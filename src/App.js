import React from "react";
import Home from "./Routes/Home/home.component";
import { Routes, Route} from "react-router-dom";
import Navigation from "./Routes/Navigation/Navigation.component";
import Authentication from "./Routes/Authentication/Authentication.components";
import Shop from "./Routes/shop/shop.component";
import Checkout from "./Routes/Checkout/Checkout.component";



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
        </Route>        
      </Routes>
    </>
  );
};

export default App;

// 5 Completed react router

// jo pass kia hai usi ko wahan pkrna hai s simple jese k mene wahan jo hai category pass kia hai props main to mujhe category k content ko access krne k lie props wahan pkrna parega

// becoz of this simple nested Route we can display this thing in that as well but that's not enough but the thing is you've to put the Outlet in the Main Home page and in that write Under the Directory so that the Outlet shows the position of the shop as a Function we wanna render.
// S simple outlet main jo nested hoga wohi ayega

    //       what does this index means is that s simple when the path meets the "/" it will display the Home Component