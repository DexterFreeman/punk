import React from 'react'
import "./Card.scss"
import autoAnimate from '@formkit/auto-animate';
import { useRef, useEffect } from 'react';
const Card = (props) => {

    const {name, description, image} = props; 
    const parent = useRef(null)

    useEffect(() => {
        parent.current && autoAnimate(parent.current)
      }, [parent])
    

    return (
        <div ref={parent} className='main-content__card'>
            
            <div className='main-content__card-image'>
                <img src={image} alt="" />
            </div>
            <h1>{name}</h1>
            
            <h2>{description}</h2>
        </div>
    )
}

export default Card