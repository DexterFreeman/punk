
import { useState } from 'react';
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
  const [filteredData, setFilteredData] = useState(punk);


 


  const handleInput = (event) => {
    switch (event.target.id){
      case "1":
        setIsHighAPVFilter(!isHighAPVFilter);
        console.log("2" + isHighAPVFilter);
 
        break;

      case "2":
          setIsClassicFilter(!isClassicFilter);
          console.log("1" + isClassicFilter);
          break;

      case "3":
        setIsAcidicFilter(!isAcidicFilter);
        console.log("3" + isAcidicFilter);
        
        break;
    }
  }




  
  return (

    <div className="App">
 
      <div className='nav-bar'>
          <label htmlFor="search">Search:</label>
          <input type="text" id="serach" onChange={handleInput}/>
          <label htmlFor="1">High APV%:</label>
          <input type="checkbox" name="HighAPV" id="1" onChange={handleInput}/>
          <label htmlFor="2">Classic selection:</label>
          <input type="checkbox" name="Classic" id="2" onChange={handleInput} />
          <label htmlFor="3">High Acidity:</label>
          <input type="checkbox" name="Classic" id="3" onChange={handleInput} />
          <h1>{isHighAPVFilter ? "true" : "false"}</h1>
          <h1>{isClassicFilter ? "true" : "false"}</h1>
          <h1>{isAcidicFilter ? "true" : "false"}</h1>

      </div>

     
      <MainContent data={punk} filterAPV={isHighAPVFilter} filterClassic={isClassicFilter} filterHighAcidity={isAcidicFilter}/>
        
    </div>
  

  );
}

export default App;
