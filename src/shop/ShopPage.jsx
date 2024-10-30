// import React, { useState } from 'react';
// import PageHeader from '../components/PageHeader';
// import Data from "../products.json";
// import ProductCards from './ProductCards';
// import Pagination from './Pagination';
// import Search from './Search';
// import ShopCateor from './ShopCateor';

// const ShopPage = () => {
//   const [GridList, setGridList] = useState(true);
//   const [products, setProducts] = useState(Data);
//   const [originalProducts] = useState(Data); // Store original data

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 12;

//   const indexOfLastProduct = currentPage * productsPerPage;
//   const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//   const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

//   // Update pagination text
//   const showResults = `Showing ${indexOfFirstProduct + 1} - ${Math.min(indexOfLastProduct, products.length)} of ${products.length} Results`;

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
    

//   const [selectedCateor, setSelectedCateor] = useState("All");
//   const menuItems = [...new set(Data.map((vaL) => VaL.cateor))];

//   const filterItem = (curcat) => {
//     const newItem = Data.filter((newVaL) => {
//       return newVaL.cateor === curcat;
//     })

//     setSelectedCateor(curcat);
//     setProducts(newItem);
//   }
 
//   return (
//     <div>
//       <PageHeader title="Our Shop Page" curPage="Shop" />
//       <div className="shop-page padding-tb">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-lg-8 col-12">
//               <article>
//                 {/* layout and title here */}
//                 <div className="shop-title d-flex flex-wrap justify-content-between">
//                   <p>{showResults}</p>
//                   <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
//                     <a className="grid" onClick={() => setGridList(true)}>
//                       <i className="icofont-ghost"></i>
//                     </a>
//                     <a className="list" onClick={() => setGridList(false)}>
//                       <i className="icofont-listine-dots"></i>
//                     </a>
//                   </div>
//                 </div>

//                 {/* product cards */}
//                 <div>
//                   <ProductCards GridList={GridList} products={currentProducts} />
//                 </div>
//                 <Pagination
//                   productsPerPage={productsPerPage}
//                   totalProducts={products.length}
//                   paginate={paginate}
//                   activePage={currentPage}
//                 />
//               </article>
//             </div>

//             {/* Search Component */}
//             <div className="col-lg-8 col-12">
//               <aside>
//                 <Search products={originalProducts} setProducts={setProducts} GridList={GridList} />
//                 <ShopCateor 
//                 filterItem={filterItem}
//                 setItem={setProducts}
//                 menuItems={menuItems}
//                 setProducts={setProducts}
//                 selectedCateor={selectedCateor}
                
//                 />
//               </aside>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;




import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';
import Data from "../products.json";
import ProductCards from './ProductCards';
import Pagination from './Pagination';
import Search from './Search';
import ShopCateor from './ShopCateor';

const ShopPage = () => {
  const [GridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);
  const [originalProducts] = useState(Data); // Store original data

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Update pagination text
  const showResults = `Showing ${indexOfFirstProduct + 1} - ${Math.min(indexOfLastProduct, products.length)} of ${products.length} Results`;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [selectedCateor, setSelectedCateor] = useState("All");

  // Unique category items
  const menuItems = ["All", ...new Set(Data.map((item) => item.cateor))];

  // Filter items based on category
  const filterItem = (curcat) => {
    if (curcat === "All") {
      setProducts(originalProducts);
    } else {
      const newItems = Data.filter((item) => item.cateor === curcat);
      setProducts(newItems);
    }
    setSelectedCateor(curcat);
  };

  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                    <a className="grid" onClick={() => setGridList(true)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setGridList(false)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* product cards */}
                <div>
                  <ProductCards GridList={GridList} products={currentProducts} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>

            {/* Search and Filter Components */}
            <div className="col-lg-8 col-12">
              <aside>
                <Search products={originalProducts} setProducts={setProducts} GridList={GridList} />
                <ShopCateor
                  filterItem={filterItem}
                  setProducts={setProducts}
                  menuItems={menuItems}
                  selectedCateor={selectedCateor}
                />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
