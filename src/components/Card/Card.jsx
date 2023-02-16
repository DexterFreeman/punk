import React from 'react'
import "./Card.scss"


const Card = (props) => {

    const {name, description, image} = props; 



    

    return (
        <div className='main-content__card'>
            
            <div className='main-content__card-image'>
                <img src={image} alt="" />
            </div>
            <h1>{name}</h1>
            
            <h2>{description}</h2>
        </div>
    )
}

export default Card