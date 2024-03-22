import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import DetailProduct from '../pages/DetailProduct'
import Contacts from '../pages/Contacts'
import About from '../pages/About'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import axios from '../axios'
import Cart from '../pages/Cart'


const Layout = () => {
    const [products, setProducts] = useState(null)
    const [cartData, setCartData]=useState([])

    const getProducts=async()=>{
        try{
            const {data}=await axios.get()
            setProducts(data)
            return data
        } catch (err){
            throw(err)
        }
    }
    useEffect(()=>{
        getProducts()
    }, [])
    if(products===null){
        return <h1>Loading...</h1>
    }
    console.log(products);
    const addToCart=(item)=>{
        setCartData([...cartData, item])
    }
  return (
    <div>
      <Header cartData={cartData}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop products={products}/>}/>
        <Route path='/detail/:id' element={<DetailProduct onAdd={addToCart}/>}/>
        <Route path='/cart' element={<Cart cartData={cartData}/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default Layout
