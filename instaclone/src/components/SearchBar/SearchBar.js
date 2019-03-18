import React from 'react';
import "./SearchBar.css";

const SearchBar = props => {
    return(
        <div className="search-container">
            <input type="text" />
            <i class="fas fa-user-circle"></i>
        </div>
    )
}

export default SearchBar;