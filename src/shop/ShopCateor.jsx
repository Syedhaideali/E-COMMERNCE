// import React from 'react'

// const ShopCateor = ({filterItem, setItem, menuItems, setProducts, selectedCateor}) => {
//   return (
//     <>
//       <div className='widget-header'>
//         <h5 className='ms-2'> ALL Categpries</h5>

//       </div>
//       <div>
//         {
//             menuItems.map((VaL, id) => {
//                 return (
//                     <button className={`m-2 ${selectedCateor === "All" ? "bg-warning" : ""}`}
//                     key={id} onClick={() => filterItem(VaL)}>
//                        {VaL}

//                     </button>
//                 )
//             })
//         }
//       </div>
//     </>
//   );
// };

// export default ShopCateor;


import React from 'react';

const ShopCateor = ({ filterItem, menuItems, selectedCateor }) => {
  return (
    <>
      <div className='widget-header'>
        <h5 className='ms-2'>All Categories</h5>
      </div>
      <div>
        {menuItems.map((val, id) => {
          return (
            <button  
              className={`m-2 ${selectedCateor === val ? "bg-warning" : ""}`}
              key={id}
              onClick={() => filterItem(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCateor;
