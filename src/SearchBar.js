import React from 'react';
import logo from './logo.png';
import { Link } from 'react-router-dom';

const SearchBar = (props) => {
  return(
    <React.Fragment>
      <div className="top">
        <div className="prod-container flex"> 
            <Link to="/">
                <img  className="logo" src={logo} />
            </Link>
           
            <input id="myInput" type="search" className="searchbar" placeholder="Search for anything..." onChange={props.searchFunc} />
        </div>

      </div>
      <div className="prod-container">
        <ul className="top-menu">
          <li>Popular</li>
          <li><a>airpods</a></li>
          <li><a>speakers</a></li>
          <li><a>ipod pro</a></li>
          <li><a>turntable</a></li>
          <li><a>sonos</a></li>
        </ul>
        <div className="post-btn">
          <span className="post-ico">&#10148;</span>Post an Ad in this category
        </div>
      </div>
		 

    </React.Fragment>
    
  )
}

export default SearchBar