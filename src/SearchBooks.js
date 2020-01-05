import React from 'react'

const SearchBooks = (props) => {

	return(
		
        <div>
            <input id="myInput" type="text" placeholder="Search" onChange={props.searchBooksFunc} /><div>&#128269;</div>				
        </div>
				
	)
}
export default SearchBooks