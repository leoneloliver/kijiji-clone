
import React from 'react';
// import logo from './logo.png';

const SearchBar = (props) => {
  return(
    <React.Fragment>
      <div className="top">
        <div className="prod-container flex"> 
            <img className="logo" src="data:image/png;base64,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" />
            {/* <img  className="logo" src={logo} /> */}
            <input id="myInput" type="search" className="searchbar" placeholder="Search for anything..." onKeyUp={props.searchFunc} />
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