import './App.css'
import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_LOCATION = gql`
  query getLocations{
    locations{
      id 
      name
      description
      photo
    }
  } 
`
function App() {
  const { data, loading } = useQuery(GET_LOCATION)
  if (loading) return 'loading...'

  return (
    <>
      {data.locations.map((location, index) => {
        return <p key={index}>{location.name}</p>
      })}
    </>
  )
}

export default App
