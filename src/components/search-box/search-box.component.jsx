import React from 'react';

import './search-box.styles.css';

// This is a functional component 
export const SearchBox = ({ placeholder, handleChange }) => (
    <input  
        className = 'search'
        type='search' 
        placeholder={ placeholder } 
        onChange= { handleChange } />
        ); 