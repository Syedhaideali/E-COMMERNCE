
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Search = ({ products, setProducts, GridList }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     const searchValue = e.target.value.toLowerCase();
//     setSearchTerm(searchValue);

//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchValue)
//     );

//     setProducts(filteredProducts);
//   };

//   return (
//     <div className='widget widget-search'>
//       <form className="search-wrapper mb-3" onSubmit={(e) => e.preventDefault()}>
//         <input
//           type="text"
//           name="search"
//           id="search"
//           placeholder='search...'
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//         <button type='submit'>
//           <i className='icofont-search-2'></i>
//         </button>
//       </form>

//       <div>
//         {
//             searchTerm && filteredProducts.map((product) => (
//                 <Link key={product.id} to={`/shop/${product.id}`}>
//                     <div className='d-flex gap-3 p-2'>
//                         <div>
//                             <div className='pro-thumb h-25'>
//                                 <img src={product.img} alt=""  width={70} className='flex-{grow|shrink}-0'/>


//                             </div>
//                         </div>

//                     </div>
//                 </Link>
//             ))
//         }
//       </div>
//     </div>
//   );
// };

// export default Search;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Search = ({ products, setProducts, GridList }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtered products list based on searchTerm
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const newFilteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchValue)
    );

    setProducts(newFilteredProducts);
  };

  return (
    <div className='widget widget-search'>
      <form className="search-wrapper mb-3" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', alignItems: 'center' }}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder='search...'
          value={searchTerm}
          onChange={handleSearch}
          style={{ flex: 1, padding: '8px' }}
        />
        <button type='submit' style={{ marginLeft: '8px', padding: '8px' }}>
          <i className='icofont-search-2'></i>
        </button>
      </form>

      <div>
        {
          searchTerm && filteredProducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className='d-flex gap-3 p-2'>
                <div className='pro-thumb h-25'>
                  <img src={product.img} alt="" width={70} className='flex-{grow|shrink}-0' />
                </div>
                <div className='product-content' >
                  <p>
                    <Link to={`shop/${product.id}`}>{product.name}</Link>
                    </p>
                    <h6>{product.price}</h6>
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Search;

