import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg'

function Header(props) {

    return (
      <div>
        <header>
          <h1>M.Metelak</h1>
          <img src={coverImage} alt="something"></img>
          {props.children}
        </header>
      </div>
    );
  }
  
  export default Header;