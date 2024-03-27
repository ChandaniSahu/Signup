import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>
    </>
  )
}

export default Home