import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react";
import PageAllRestaurants from "./pages/PageAllRestaurants"
import PagerestaurantDetails from "./pages/PagerestaurantDetails"
import MyAccount from "./pages/MyAccount";
function App() {
  return (
    <div className="App">
    <BrowserRouter >
    <Routes>
      <Route index element ={<PageAllRestaurants/>}/>
      <Route path="/restaurant/:id" element ={<PagerestaurantDetails />}/>
      <Route  path="/my-account" element={<MyAccount/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
