import { render, screen } from "@testing-library/react";
import NavBar from './NavBar'


const handleInput = (event) => {
   
    switch (event.target.id){
      case "1":
        console.log("1")
        break;

      case "2":
          sconsole.log("2")
          break;

      case "3":
        console.log("3")
        break;

      default:
        console.log("4")
        break;
    }
  }

it("Should render all the inputs in the nav bar", () => {
    //Arrange
    render(<NavBar handleInput={handleInput}/>)

    //Act
    const search = screen.getByRole('textbox', {
        name: /search:/i
      })

    const highApv = screen.getByRole('checkbox', {
        name: /high apv%:/i
      })

    const classic = screen.getByRole('checkbox', {
        name: /classic selection:/i
      })
      const role = screen.getByRole('checkbox', {
        name: /high acidity:/i
      })
      
      
      
    //Assert
    expect(search).toBeInTheDocument(); 
    expect(highApv).toBeInTheDocument(); 
    expect(classic).toBeInTheDocument(); 
    expect(role).toBeInTheDocument(); 
    


})

it("Should render the labels correctly", () => {

    //Arrange
    render(<NavBar handleInput={handleInput}/>)

    //Act
    const search = screen.getByText(/search:/i)
    const highApv = screen.getByText(/high apv%:/i)
    const classic = screen.getByText(/classic selection:/i)
    const role = screen.getByText(/high acidity:/i)
      
    //Assert
    expect(search).toBeInTheDocument(); 
    expect(highApv).toBeInTheDocument(); 
    expect(classic).toBeInTheDocument(); 
    expect(role).toBeInTheDocument(); 
})