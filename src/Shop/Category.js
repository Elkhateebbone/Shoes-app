import React from 'react'

export const Category = ({onTabClick}) => {
    const handleTabClick=(name)=>{
        console.log(name);

    return onTabClick(name);
    }
  return (
    <div className="tab-container">
    <div className="tabs">
      <div className="tab active" onClick={() => handleTabClick('allProducts')} data-filter="all">All Products</div>
      <div className="tab" onClick={() => handleTabClick('Mobile')} data-filter="Phone">Mobile</div>
      <div className="tab" onClick={() => handleTabClick('Laptop')} data-filter="Phone">Laptop</div>

      <div className="tab" onClick={() => handleTabClick('Camera')} data-filter="Camera">Camera</div>
      <div className="tab" onClick={() => handleTabClick('Shirt')} data-filter="Shirt">Shirt</div>
      <div className="tab" onClick={() => handleTabClick('Cap')} data-filter="adidas">Cap</div>
    </div>
  </div>
    )
}

export default Category 