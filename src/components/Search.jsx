import React from "react"

function Search({query, onUpdateQuery}) {
    return (
      <div className="search">
          <input
            type="text"
            placeholder="Search Car"
            value={query}
            onChange={onUpdateQuery}
          />
          <i></i>
    </div>
    )
  }
  
export default Search;