import React from 'react'
import Card from '../../components/Card/Card'
import "./MainContent.scss"
const MainContent = (props) => {

    const {data} = props
    console.log(data)
    const beerListJSX = data.map((beer) => {
        return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url}/>
    })
    console.log(beerListJSX)
    return (
        <div className='main-content'>
           {beerListJSX}
    
        </div>
    )
}

export default MainContent