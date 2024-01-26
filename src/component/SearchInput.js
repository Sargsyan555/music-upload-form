import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../style/SearchInput.css'
export default function SearchInput() {
  return (
     <div className="search-filter-input">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="Filter" className="search-input" />
    </div>
    )
}
