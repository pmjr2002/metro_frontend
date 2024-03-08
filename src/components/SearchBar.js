import React, { useState, useEffect } from 'react';
import {FaSearch} from "react-icons/fa";

const SearchBar = ({ placeholder, suggestions, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  useEffect(() => {
    const filterResults = suggestions.filter(suggestion =>
      suggestion.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSuggestions(filterResults);
  }, [searchTerm, suggestions]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleClickSuggestion = (suggestion) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
  };

  return (
    <div className="search-bar">
      <div className="flex">
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleSearch}
          className="block placeholder-gray-500 bg-zinc-900 text-gray-300 focus:outline-none px-3 py-2 rounded-l-full text-2xl caret-gray-300"
        />
        <button className="bg-zinc-900 text-gray-500 px-3 py-2 rounded-r-full text-xl"><FaSearch/></button>
      </div>
      {searchTerm && (
        <ul className="bg-zinc-900 text-gray-300 text-lg divide-y divide-solid divide-gray-500">
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.map((suggestion, index) => (
              <li
                key={index}
                onClick={() => handleClickSuggestion(suggestion)}
                className="py-2 cursor-pointer"
                >
                {suggestion}
              </li>
            ))
          ) : (
            <li>No suggestions found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
