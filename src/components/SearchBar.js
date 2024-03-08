import React, {useState} from 'react'
import axios from "axios"
import {FaSearch} from "react-icons/fa"

const SearchBar = ({placeholder, data}) => {
	const [searchText, setSearchText] = useState('')
	const [isSearching, setIsSearching] = useState(false)

	const handleChange = (event) => {
		setSearchText(event.target.value.toLowerCase())
		event.target.value === '' ? setIsSearching(false) : setIsSearching(true)
	}

  return (
    <div className = "flex">
			<div>
				<input
					type = "text"
					placeholder = {placeholder}
					onChange = {handleChange}
					className = "relative block placeholder-gray-500 bg-zinc-900 focus:outline-none px-3 py-2 rounded-l-full text-2xl caret-gray-300"
					value = {searchText}
				/>
				{isSearching && (
					<ul>
						{data.map((item) => {
							return <li key = {item}>{item}</li>
						})}
					</ul>
				)}
			</div>
			<button className = "bg-gray-300 px-4 rounded-r-full bg-blue-500">
				<FaSearch/>
			</button>
		</div>
  )
}

export default SearchBar