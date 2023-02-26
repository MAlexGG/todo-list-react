import React from 'react'

function Search({setSearch}) {

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
      <>
          <input type="text" placeholder='search' onChange={handleChange}/>
      </>
  )
}

export default Search