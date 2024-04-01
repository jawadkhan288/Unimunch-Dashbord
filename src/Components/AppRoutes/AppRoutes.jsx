import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashbord from "../../Pages/Dashbord/Dashbord";
import Like from "../../Pages/Like/Like";
import Cart from "../../Pages/Cart/Cart";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashbord></Dashbord>} />
      <Route path="/like" element={<Like></Like>} />
      <Route path="/cart" element={<Cart></Cart>} />

      {/* <Route path="/like" element={<Like></Like>}></Route>
      <Route path="/cart" element={<Cart></Cart>}></Route> */}
    </Routes>
  );
}

export default AppRoutes;
