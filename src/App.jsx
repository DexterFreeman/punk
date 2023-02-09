
import './App.scss';
import MainContent from './containers/MainContent/MainContent';
import NavBar from './containers/NavBar/NavBar';
import punk from "./data/punk"


const App = () => {


  return (
    <div className="App">
      <NavBar/>
      <MainContent data={punk}/>
    </div>
  );
}

export default App;
