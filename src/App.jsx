import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Navbar } from './Component/Navbar/Navbar'
import { Cart } from './Pages/Cart'
import { LoginSignup } from './Pages/LoginSignup'
import { Shop } from './Pages/Shop'
import { ShopCategory } from './Pages/ShopCategory'
import { Product } from './Pages/Product'
import { Footer } from './Component/Footer/Footer'
import men_ban from './Component/Assets/banner_mens.png'
import women_ban from './Component/Assets/banner_women.png'
import kids_ban from './Component/Assets/banner_kids.png'

function App() {

  return (
    <>
    
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_ban} category="men"/>}/>
        <Route path='/womens' element={<ShopCategory banner={women_ban} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kids_ban} category="kid"/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter> 
    </>
  )
}

export default App
