import React from 'react';

const SearchField =({handleChange})=> {
    return(
        <div>
            <input onChange = {(e)=> handleChange(e.target.value)} type="search" placeholder="search robot(s)" />
            <button>go</button>
        </div>
    )
};

export default SearchField;