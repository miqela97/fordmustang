import React from "react";
import { Link } from "react-router-dom";

function Navbar(){
    return(
            <nav>
        <ul>
          <ol>
            <Link to="/">Home<img src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/512/house-icon.png" width={17}></img></Link>
          </ol>
          <ol>
            <Link to="/search">Search Cars<img src='https://freeiconshop.com/wp-content/uploads/edd/search-outline-filled.png' width={17}></img></Link>
          </ol>
          <ol>
            <Link to="/info">Information<img src="https://img1.pnghut.com/22/11/0/eNzTPWJbJD/kraft-paper-papyrus-openoffice-draw-page-scroll.jpg" width={17}></img></Link>
          </ol>
        </ul>
      </nav> 
    )
}
export default Navbar;