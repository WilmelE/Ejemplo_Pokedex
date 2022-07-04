import React from 'react'

interface ICO_Inter{
    id:number,
    name: string,
    image:string,
    type: string
}

export const Iconos_P = ({id,name,image,type}:ICO_Inter) => {
  
    
  
    return (
    <div className={`thumb-container ${type}`}>
        <div className='number'>
            <small>#0{id}</small>
        </div>
      
        <img src={image} alt={name} />
        
        <div className='detail-wrapper'>
            <h3>{name}</h3>
            <small>Type: {type}</small>
        </div>

    </div>
  )
}
