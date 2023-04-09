import React from 'react'
import { CtSearch, SearchInput, SearchLable } from './Search.styled';

function Search({setSearch}) {

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

  return (
      <>
        <CtSearch>
            <SearchLable>Buscar tarea</SearchLable>
            <SearchInput type="text" placeholder='escribe la tarea que quieres buscar...' onChange={handleChange}/>
        </CtSearch>
        
      </>
  )
}

export default Search