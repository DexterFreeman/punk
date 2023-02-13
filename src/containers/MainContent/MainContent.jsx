import React from 'react'
import Card from '../../components/Card/Card'
import "./MainContent.scss"
const MainContent = (props) => {

    const {data, filterAPV, filterClassic, filterHighAcidity} = props
    let beerListJSX;
    let beerFilter;
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
    console.log("first")
        beerListJSX = data.map((beer) => {
        
            return <Card key={beer.id} name={beer.name} description={beer.description} image={beer.image_url} />
        });
        
   }

    return (
        <div className='main-content'>
           {beerListJSX}
    
        </div>
    )
}

export default MainContent