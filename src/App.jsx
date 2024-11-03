// import { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";
import AppLayout from "./pages/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage></HomePage>}></Route>
          <Route path="pricing" element={<Pricing></Pricing>}></Route>
          <Route path="product" element={<Product></Product>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="app" element={<AppLayout></AppLayout>}>
            <Route
              index
              element={<Navigate to="cities" replace></Navigate>}
            ></Route>
            <Route path="cities" element={<CityList></CityList>}></Route>
            <Route path="cities/:id" element={<City></City>}></Route>
            <Route
              path="countries"
              element={<CountryList></CountryList>}
            ></Route>
            <Route path="form" element={<Form></Form>}></Route>
          </Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
