import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between items-center h-16 relative font-bold p-10">
      <Link to='/' className='text-base ' role="navigation">
        Efficiently.app
      </Link>
      <div className="cursor-pointer md:hidden" onClick={toggle}>
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
      </div>
      <div className="md:block hidden">
        <a className="" href="https://twitter.com/doefficiently">@DoEfficiently</a>
      </div>

    </nav>
  )
}

export default Navbar
