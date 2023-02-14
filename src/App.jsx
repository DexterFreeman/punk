
import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.scss';
import FilteredContent from './containers/FilteredContent/FilteredContent';
import MainContent from './containers/MainContent/MainContent';
import NavBar from './containers/NavBar/NavBar';
import punk from "./data/punk"


const App = () => {

  const [isClassicFilter, setIsClassicFilter ] = useState(false);  
  const [isHighAPVFilter, setIsHighAPVFilter ] = useState(false);  
  const [isAcidicFilter, setIsAcidicFilter ] = useState(false);  
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState(); 


  const getData = async () => {
    const res = await fetch("https://api.punkapi.com/v2/beers");
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    
    getData(); 
  }, [])


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

    <div className="App">
      
      <NavBar handleInput={handleInput} />
    
     
      {data && (
        <MainContent data={data} searchTerm={searchTerm} filterAPV={isHighAPVFilter} filterClassic={isClassicFilter} filterHighAcidity={isAcidicFilter}/>
        )}
        
    </div>
  

  );
}

export default App;
