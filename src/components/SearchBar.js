import React, { useState } from 'react';

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState("");

    const searchTextChange = event => {
        setTerm(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault();

        onSearchSubmit(term);
    };


    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={term} 
                        onChange={searchTextChange} />
                </div>
            </form>
        </div>
    );
};


export default SearchBar;