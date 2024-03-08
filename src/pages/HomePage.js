import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import axios from 'axios'

export default function HomePage() {
  const [data, setData] = useState([])

  // useEffect(() => {
  //   let fetchData = async() => {
  //     let response = axios.get('http://localhost:3000/stations')

  //     if (response.status === 200) {
  //       setData(response.data)
  //     }
  //     else{
  //       alert('Something went wrong')
  //     }
  //   }

  //   fetchData()
  // }, [data])

  return (
    <div className="h-[calc(100vh-64px)] bg-zinc-800">
      <div className = "flex w-full justify-evenly p-4">
        <SearchBar placeholder = "Search source"/>
        <SearchBar placeholder = "Search destination"/>
      </div>
    </div>
  )
}
