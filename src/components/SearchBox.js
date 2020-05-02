import React from 'react';

const SearchBox = ({ searchChange, content }) => {
    return (
        <div>
            <input 
                className='tc pa2 ma4 b--light-gray bg-light-gray'
                type='search' 
                placeholder={content}
                onChange={searchChange}
            ></input>
        </div>
    )
}

export default SearchBox;