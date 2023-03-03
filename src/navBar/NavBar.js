import { Link } from "react-router-dom";
import { Navbar } from "./NavBarStyled";
import logo from '../images/logo.png'

export const NavBar = () => {

  return (
    <Navbar>
      <div>
        <img src= {logo} alt = 'logo'/>
      <h1>Spotify</h1> 
      <span>&reg;</span>
      </div>

      <div>
        <ion-icon name="home-outline"></ion-icon>
        <Link to='/'>Home</Link>
      </div>
      <div>
        <ion-icon name="search-outline"></ion-icon>
        <Link to='/search'>Search</Link>
      </div>
    </Navbar>
  )
}