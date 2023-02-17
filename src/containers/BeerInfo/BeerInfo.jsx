import React from 'react'
import './BeerInfo.scss'
const BeerInfo = (props) => {
    const {beerObject, handleToggleCard} = props; 
  return (
    <div className='beer-info' onClick={handleToggleCard}>
        <div className='beer-info__container'>
            <img src={beerObject[0].image_url}/>
            <h2>{beerObject[0].name}</h2>
            <h2>Date brewed: {beerObject[0].first_brewed}</h2>
            <h2>PH: {beerObject[0].ph}</h2>
            <p>{beerObject[0].description}</p>
        </div>
      
    </div>

  )
}

export default BeerInfo