import React from 'react'
import Header from './Header'

function Welcome() {
  return (
    <>
    <Header/>
    <div className = "Welcome-container">
        <h1 className="welcome-title">Welcome to the Online Library System with Exciting Fiction and Non-Fiction Categories</h1>
        <p className="welcome-text">Please Choose a category!!!for our Unique Collections</p>
    </div>
    </>
  )
}

export default Welcome