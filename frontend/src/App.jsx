import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Componants/Header"
import Home from "./Pages/Home"
import Category from "./Pages/Category"
import Product from "./Pages/Product"
import Footer from "./Componants/Footer"
import clothingbanner from './assets/clothingbanner.png'
import electronicsbanner from './assets/electronicsbanner.png'
import cosmeticsbanner from './assets/cosmeticsbanner.png'
import Light from "./Componants/Light"






function App() {

  return (
    <>
    <main className="text-tertiary">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/clothing" element={<Category Category={"clothing"} banner={clothingbanner} />}/>
        <Route path="/cosmetics" element={<Category Category={"cosmetics"} banner={cosmeticsbanner} />} />
        <Route path="/electronics" element={<Category  Category={"electronics"} banner={electronicsbanner} />}/>
       
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/Light" element={<Light/>} />


      </Routes>

      <Footer/>
      </BrowserRouter>
    </main>
    </>
  )
}

export default App
