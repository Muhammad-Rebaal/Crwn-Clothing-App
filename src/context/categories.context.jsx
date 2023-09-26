import { createContext, useState, useEffect } from "react";
import { addCollectionAndDocuments } from "../utils/Firebase.utils/Firebase.utils.js";
import { getCategoriesAndDocuments } from "../utils/Firebase.utils/Firebase.utils.js";

export const CategoriesContext = createContext({
  products: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategories] = useState({});
  // useEffect(()=>{
  //   addCollectionAndDocuments('categories',Shop_Data)
  // })
  useEffect(()=>{
    const getCategoriesMap = async ()=>{
      var categoryMap = await getCategoriesAndDocuments();
      // console.log(categoryMap);
      setCategories(categoryMap);
    }
    getCategoriesMap();
  },[])

  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );
};

// context q use hota hai k main kahin bhi apni value ko use krlon yahan pr maene shopdata
// yani each product k data ko context se use kr rha hon take main kahin bhi use krskon
// shop data ko is lie mene CreateContext ka istimal kia createContext k andr products ka array bnaya
// shopdata import kr k usestate kr k usmain daldia and then initial products ko value k andr daldia
// ProductContextProvider ki value k andr value de de take main kahin bhi access kr skon {products} aise
// phir jao shop.components.jsx main
