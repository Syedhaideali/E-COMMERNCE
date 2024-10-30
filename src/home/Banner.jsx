import React, { useState } from 'react';
import productData from "../products.json"; // Ensure this path is correct
import { Link } from 'react-router-dom';
import SeletedCategory from '../components/SelectedCategory';
import SelectedCategory from '../components/SelectedCategory';

// Title and description constants
const title = (
  <h2>Search Your One From <span>Thousands</span> Of Products</h2>
);

const desc = "We have the largest collection of products";

const Banner = () => {
  // State for search input and filtered products
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  // Search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filtering products based on search term
    const filtered = productData.filter((product) => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title} {/* Render the title */}
          
          <form>
            <SelectedCategory select={"all"}/>
            <input 
              type="text" 
              name="search" 
              id="search" 
              placeholder="Search your products" 
              value={searchInput}
              onChange={handleSearch} // Use onChange to handle typing in the input 
              />
              <button type='submit'>
              <i className="icofont-search"></i>
              </button>
          </form>
          <p>{desc}</p>

          <ul className="lab-ul">
            {searchInput && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))
            ) : (
              <li>No products found</li> // Display message if no products match
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
