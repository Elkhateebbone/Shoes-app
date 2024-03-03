import React, { useState } from 'react'
import  { useContext } from 'react'
import { ShopContext } from '../Shop-Context';
import ProductsData  from '../products'
import Product from './Product';
import  Navbar  from "../Components/Navbar";
import Category from './Category';
import Sidebar from '../Components/Sidebar';
export const Shop = () => {
  const [Products] = useState(ProductsData);
  const[ filterproduct,setFilteredProducts] = useState(Products);
  const handlePriceFilterChange = (range) => {
    let min = 0;
    let max = 1000 ;
    switch (range) {
      case '0-50':
        min = 0;
        max = 50;
        break;
      case '50-100':
        min = 50;
        max = 100;
        break;
      case '100-150':
        min = 100;
        max = 150;
        break;
      case 'over-150':
        min = 150;
        break;
      default:
        break;
    
    }
    console.log(min);
    console.log(max);

    const filtered = ProductsData.filter((product) => product.price >= min && product.price <= max);
    setFilteredProducts(filtered);
  };
  
  

  // const handlePriceFilterChange = (range) => {
  
  //   let min = 0;
  //   let max = Infinity;
  //   switch (range) {
  //     case '0-50':
  //       max = 50;
  //       break;
  //     case '50-100':
  //       min = 50;
  //       max = 100;
  //       break;
  //     case '100-150':
  //       min = 100;
  //       max = 150;
  //       break;
  //     case 'over-150':
  //       min = 150;
  //       break;
  //     default:
  //       break;
  //   }
  //   const filtered = ProductsData.filter((product) => product.price >= min && product.price <= max);
  //   setFilteredProducts(filtered);
  //   console.log(filtered);
  // };
  const getfilterColor=(color)=>{
    
    const filteredcolor = Products.filter(product =>
      product.color.toLowerCase() === color.toLowerCase());
      setFilteredProducts(filteredcolor);
  }
  const getCat = (category) => {
    if (category === 'allProducts') {
      setFilteredProducts(Products);
    } else {
      const filteredProducts = Products.filter(product =>
        product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filteredProducts);
    }
  };
  
  const handleSearch = (searchQuery) => {
    setFilteredProducts(
      Products.filter(product =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };
// const getPricefilter=(price)=>{
//   console.log(price)
// }
  return (
    <div>
           <Sidebar getPrice ={handlePriceFilterChange} getColor={getfilterColor}/>
           {/* <Sidebar /> */}
        <Navbar onSearch={handleSearch}/>
        <Category onTabClick = {getCat} />
        <div className='shop'>
           
            <div className='products'>
                  {filterproduct.map((product)=>(
                    
                    <Product data = {product} />
                  ))
                  }
                  
            </div>
        </div>
    </div>
   
  )
}

export default Shop