import './Directory-item.scss'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Directoryitem = ({props}) => {
    const {imageUrl,title,route} = props
    const navigate = useNavigate()
    const NavigateHandler = ()=>{navigate(route)}
    return (

      <div  className="directory-item-container" onClick={NavigateHandler}>
          <div className="background-image" style={{backgroundImage:`url(${imageUrl})`}} />
          <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    
  )
}

export default Directoryitem
