/*
import { useState } from "react"


export default function SerchBar({OnSerch}){
    const [inputvalue , setinputvalue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputvalue.trim()) {
            OnSerch(inputvalue.trim());
        }
    }

    // function handleclear(){
    //     setinputvalue('');
    //     OnSerch('');
    // }
 return(
    <form onSubmit={handleSubmit}>
     <input type="text" value={inputvalue} onChange={(e) => setinputvalue(e.target.value)}/>
     <button  type="submit">
         🔍 Search
     </button>
     
    </form>
 ) 
}
*/

import { useState } from 'react';
                                  
export default function SearchBar({ OnSearch }) {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            OnSearch(query.trim());
        }
    };

    const handleClear = () => {
        setQuery('');
        OnSearch('');  // Show popular movies again
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <input
                type="text"
                placeholder="Search movies... (e.g., Batman, Avengers)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-btn">
                🔍 Search
            </button>
            {query && (
                <button 
                    type="button" 
                    onClick={handleClear}
                    className="clear-btn"
                >
                    ✕ Clear
                </button>
            )}
        </form>
    );
}