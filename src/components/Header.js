import React from 'react';
import logo from '../components/images/Fill-213.png'

export default function Header() {
  return (
    <header className='header-container'>
      <img 
      className="logo"
      src={logo}
      />
      <h1>my travel journal</h1>
    </header>
  )
}