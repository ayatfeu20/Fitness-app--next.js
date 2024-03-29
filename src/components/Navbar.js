import React from 'react'
import Link from 'next/link'


const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <div className="logo"><Link href="/" className="nav-name">AMFitApp</Link></div>
        <div className="nav-links">
            <Link href="/" className="nav-link">Home</Link>
           
            <Link href="/about" className="nav-link">About</Link>
        </div>
    </div>
  )
}

export default Navbar