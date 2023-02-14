import React from 'react'
import Card from '../../components/Card/Card'
import "./MainContent.scss"
import { useRef, useState, useEffect } from 'react'
import autoAnimate from '@formkit/auto-animate'

const MainContent = (props) => {

    const {data, filterAPV, filterClassic, filterHighAcidity, searchTerm} = props
    let beerListJSX;
    let beerFilter = data; 
    const parent = useRef(null)


    useEffect(() => {
        parent.current && autoAnimate(parent.current)
      }, [parent])


    //Data which matches their respective filters. 
    const filteredClassicData = data.filter((beer) => {
        const year = beer.first_brewed.split("/")
        if (parseInt(year[1]) < 2010){
        return true; 
        }
        else{
        return false; 
        }
    });
    const filteredHighAPVData = data.filter((beer) => beer.abv > 6);
    const filteredHighAcidityData = data.filter((beer) => beer.ph < 4)

    const filterSearch = (filter, array) => {
        return array.filter((beer) => beer.name.toLowerCase().includes(filter.toLowerCase()))
    }

   if(searchTerm){
        beerFilter = filterSearch(searchTerm, beerFilter)
   }
   else{
    beerFilter = data
   }
   
   if (filterAPV){
        
        beerFilter = data.filter((beer) => filteredHighAPVData.includes(beer)); 
        
        if (filterClassic){
            beerFilter = beerFilter.filter((beer) => filteredClassicData.includes(beer));
            if (filterHighAcidity){
                beerFilter = beerFilter.filter((beer) => filteredHighAcidityData.includes(beer));
                beerListJSX = beerFilter.map((beer) => {
                    return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
                });
            }
        }
        else if (filterHighAcidity){
            beerFilter = beerFilter.filter((beer) => filteredHighAcidityData.includes(beer));
            beerListJSX = beerFilter.map((beer) => {
                return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
            });
        }
        else {
            beerListJSX = beerFilter.map((beer) => {
                return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
            });
        }
   }
    
    
   else if (filterClassic){
        
        beerFilter = data.filter((beer) => filteredClassicData.includes(beer));
       
        if (filterHighAcidity){
            beerFilter = beerFilter.filter((beer) => filteredHighAcidityData.includes(beer));
            beerListJSX = beerFilter.map((beer) => {
                return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
            });
        }
        else {
            beerListJSX = beerFilter.map((beer) => {
                return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
            });
        }
   }

   else if (filterHighAcidity){
        beerFilter = data.filter((beer) => filteredHighAcidityData.includes(beer));
        beerListJSX = beerFilter.map((beer) => {
            return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
        }); 
   }

   else{
        beerListJSX = beerFilter.map((beer) => { return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />});    
   }

    return (
        <div  ref={parent} className='main-content'>
           {beerListJSX}
        </div>
    )
}

export default MainContent