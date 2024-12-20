//Header component for main page 
import "../assets/styles/global.css";

function Header(){
  return(
    <header className="header ">
      <button className ="nav-item audiowide-regular">Home</button>
      <button className ="nav-item audiowide-regular" >Gallery</button>
      <button className ="nav-item audiowide-regular">Sponsers</button>
      <button className ="nav-item audiowide-regular">About Us</button>
    </header>
  )

}

export default Header;