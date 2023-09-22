import React from 'react'
import Categoryitem from '../Components/Category-item/Category-item.component'
import './directory.style.scss'

const Directory = ({categories}) => {
  return (
    <div className="directory-container">
    {categories.map((category)=>(
    <Categoryitem key={category.id} props={category}/>

    ))}
  </div>
  )
}

export default Directory
