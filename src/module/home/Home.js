import React, { useEffect, useState } from 'react'
import Hero from '../../component/Hero/Hero'
// import Products from '../../component/product/Products'
import FeatureCart from '../../component/FeatureCart/FeatureCart'
import Stats from '../../component/StatsCard/Stats'
import Products from '../../component/product/Products'


const Home = () => {
  const [products,setProducts] = useState([])
  useEffect(()=>{
    const fetchProducts = async()=>{
      const response = await fetch('https://fakestoreapi.com/products?limit=12')
      const data =  await response.json()
      console.log(data)
      setProducts(data)
    }
    fetchProducts()
  },[])
  return (
    <div>
      <Hero/>
      <div className="flex flex-col text-center w-full mt-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">PRODUCTS</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
    </div>
    {
      products.length > 0 ?
      <Products products={products}/>
      
      :
      <div>loading....</div>
    }
      <Products/>
      <FeatureCart/>
      <Stats/>
    
    </div>
  )
}

export default Home
