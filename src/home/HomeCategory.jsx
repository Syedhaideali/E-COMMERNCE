import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const subTitle = "Choose Any Products";
const title = "Buy Everything with Us";
const btnText = "Get Started Now"; // Define btnText here

const categoryList = [
  {
    imgUrl: 'src/assets/images/category/01.jpg',
    imgAlt: 'DSLR Camera',
    iconName: 'icofont-brand-windows',
    title: 'DSLR Camera',
  },
  {
    imgUrl: 'src/assets/images/category/02.jpg',
    imgAlt: 'Shoes',
    iconName: 'icofont-brand-windows',
    title: 'Shoes',
  },
  {
    imgUrl: 'src/assets/images/category/03.jpg',
    imgAlt: 'Photography',
    iconName: 'icofont-brand-windows',
    title: 'Photography',
  },
  {
    imgUrl: 'src/assets/images/category/04.jpg',
    imgAlt: 'Formal Dress',
    iconName: 'icofont-brand-windows',
    title: 'Formal Dress',
  },
  {
    imgUrl: 'src/assets/images/category/05.jpg',
    imgAlt: 'Colorful Bags',
    iconName: 'icofont-brand-windows',
    title: 'Colorful Bags',
  },
  {
    imgUrl: 'src/assets/images/category/06.jpg',
    imgAlt: 'Home Decor',
    iconName: 'icofont-brand-windows',
    title: 'Home Decor',
  },
];

const HomeCategory = () => {
  const [hovered, setHovered] = useState(null); // To keep track of the hovered image

  const handleMouseEnter = (i) => {
    setHovered(i);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <div className="category-section style-4 padding-tb">
      <div className="container">
        {/* section navbar */}
        <div className="section-header text-center">
          <span className="subtitle">{subTitle}</span>
          <h2 className="title">{title}</h2>
        </div>

        {/* section card */}
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center row-cols-md-3 row-cols-sm-2 row-cols-1">
            {categoryList.map((vaL, i) => (
              <div key={i} className="col">
                <Link to="/shop" className="category-items">
                  <div
                    className="category-inner"
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={handleMouseLeave}
                    style={{ position: 'relative', overflow: 'hidden' }} // Added position: relative
                  >
                    <div className="category-thumb">
                      <img
                        src={vaL.imgUrl}
                        alt={vaL.imgAlt}
                        style={{
                          width: '100%',
                          transition: 'transform 0.3s ease',
                          transform: hovered === i ? 'scale(1.1)' : 'scale(1)',
                        }} 
                      />
                      {/* Dark overlay effect */}
                      <div
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundColor: hovered === i ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
                          transition: 'background-color 0.3s ease',
                        }}
                      />
                    </div>
                    {/* Content inside the image */}
                    <div
                      className="category-content"
                      style={{
                        position: 'absolute',
                        bottom: '20px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        textAlign: 'center',
                        color: '#fff', // Title text in white
                        opacity: hovered === i ? 1 : 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <div
                        className="cate-icon"
                        style={{
                          backgroundColor: 'yellow', // Icon background yellow
                          borderRadius: '50%',
                          padding: '10px',
                          display: 'inline-block',
                          marginBottom: '10px',
                        }}
                      >
                        <i className={vaL.iconName} style={{ fontSize: '24px', color: '#000' }}></i>
                      </div>
                      <Link to="/shop"><h6>{vaL.title}</h6></Link>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>   
          <div className="text-center mt-5">
            <Link to="/shop" className="lab-btn"><span>{btnText}</span></Link> {/* btnText is used here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCategory;
