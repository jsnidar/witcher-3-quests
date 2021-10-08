import React from 'react';


const SearchInput = ({searchText, setSearchText}) => {

    console.log(searchText)
    return (
        <div className="form-outline">
            <br></br>
            <label className="form-label" htmlFor="typeText">Search for quest by name: </label>
            <input onChange={(e)=> setSearchText(e.target.value)} type='text' id="typeText" value={searchText} className="form-control"/>
            <br></br>
        </div>
    );
};

export default SearchInput;