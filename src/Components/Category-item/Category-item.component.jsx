import './category.item.scss'

import React from 'react'

const Categoryitem = ({props}) => {
    const {imageUrl,title} = props
  return (
    
      <div  className="category-container">
          <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    
  )
}

export default Categoryitem
