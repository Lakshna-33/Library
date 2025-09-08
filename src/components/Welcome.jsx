import React from 'react'
import Header from './Header'
import "./WelcomePage.css"

function Welcome() {
  return (
    <>
    <Header/>
    <body className = "welcome-container">
        <h1 className="welcome-title">Welcome to the Online Library System with Exciting Fiction and Non-Fiction Categories</h1>
        <p className="welcome-text">Please Choose a category!!!for our Unique Collections</p>
    </body>
    </>
  )
}

export default Welcome