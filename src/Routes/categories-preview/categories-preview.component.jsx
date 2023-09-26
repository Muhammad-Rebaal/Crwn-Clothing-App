import React, { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
// import ProductCard from "../../Components/product-card/product-card.component";
import CategoryPreview from "../../Components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
    {Object.keys(categoriesMap).map((title,) => {
      const products = categoriesMap[title]
      return(
        <CategoryPreview  key={title} title={title} products={products}/>
      )
    })}
  </>
    // <div cla>
    //   {Object.keys(categoriesMap).map((title) => (
    //     <Fragment key={title}>
    //       <h2>{title}</h2>
    //       <div className="products-container">
    //         {categoriesMap[title].map((product) => (
    //           <ProductCard key={product.id} product={product}></ProductCard>
    //         ))}
    //       </div>
    //     </Fragment>
    //   ))}
    // </div>
  );
};

export default CategoriesPreview;


// ProductContext import kia and then {product} ko aise pkra aur useContext syntax ka istimal kia and 
// ProductContext dala to mene sari products.map kia q k pehle main shopdata ko iterate kr rha tha
// lekin ab mene products kia q k shop_data === products phir mene ProductCard main mene jo hai product
// nami prop bnaya tha and then usmain mene apna actual product hi bhjdia jis se mene apne 
// product-card.component.jsx main destructure kr k use krlia 