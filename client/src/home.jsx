import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Link to='/signup'>Signup</Link>
    <Link to='/login'>Login</Link>

  <h1>Hi! I am Chandani Sahu</h1>
  <h3>This is basic signup and login page that<br/>
    I build to learn basic signup and login functionality in any web application</h3>
    </>
  )
}

export default Home