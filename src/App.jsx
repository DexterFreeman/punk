
import { useState, useRef, useEffect } from 'react';
import autoAnimate from '@formkit/auto-animate'

import './App.scss';
import MainContent from './containers/MainContent/MainContent';
import NavBar from './containers/NavBar/NavBar';
import BeerInfo from './containers/BeerInfo/BeerInfo';



const App = () => {

  const [isClassicFilter, setIsClassicFilter ] = useState(false);  
  const [isHighAPVFilter, setIsHighAPVFilter ] = useState(false);  
  const [isAcidicFilter, setIsAcidicFilter ] = useState(false);  
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(); 
  const [isShowCard, setIsShowCard] = useState(false); 
  const [beerToShow, setBeerToShow] = useState();
  const parent = useRef(null)

  const getData = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const datares = await res.json()
    setData(datares)
  }

  useEffect(() => {
    parent.current && autoAnimate(parent.current)
    getData(); 
  }, [])


  const handleClick = (event) => {

    event.preventDefault();
    console.log(event.currentTarget);
  
    setIsShowCard(!isShowCard);
    setBeerToShow(event.currentTarget.id);
  }

  const handleToggleCard = () => {
    setIsShowCard(!isShowCard);
  }

  const handleInput = (event) => {
   
    switch (event.target.id){
      case "1":
        setIsHighAPVFilter(!isHighAPVFilter);
        break;

      case "2":
          setIsClassicFilter(!isClassicFilter);
          break;

      case "3":
        setIsAcidicFilter(!isAcidicFilter);
        break;

      default:
        setSearchTerm(event.target.value);
        break;
    }
  }


  

  return (

    <div ref={parent} className="App">
      
      <NavBar handleInput={handleInput} />
    
     
      {data && (
        isShowCard ? 
        <BeerInfo beerObject={data.filter((beer) => beer.name === beerToShow)} handleToggleCard={handleToggleCard}/>
        :
        
        <MainContent data={data} onClick={handleClick} searchTerm={searchTerm} filterAPV={isHighAPVFilter} filterClassic={isClassicFilter} filterHighAcidity={isAcidicFilter} handleClick={handleClick}/> 
        
        )}

    </div>
  

  );
}

export default App;
