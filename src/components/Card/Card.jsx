import React from 'react'
import "./Card.scss"


const Card = (props) => {

    const {name, description, image, handleClick} = props; 



    

    return (
        <div className='main-content__card' id={name} onClick={handleClick}>
            
            <div className='main-content__card-image'>
                <img src={image} alt="" />
            </div> 
            <h1>{name}</h1>
            
            <h2>{description}</h2>
        </div>
    )
}

export default Card