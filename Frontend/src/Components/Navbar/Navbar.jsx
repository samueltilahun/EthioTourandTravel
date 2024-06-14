import React, { useState } from 'react'
import "./navbar.css"
import {MdOutlineTravelExplore} from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  const [active, setActive] =  useState('nav-bar');
  const showNavBar = () => {
    setActive('nav-bar show-nav');
  }
  const removeNavBar = () => {
    setActive('nav-bar');
  }
  return (
    <section>
      <header className='header flex'>
        <div className="logo-div">
          <NavLink to={'/'} className="logo flex"><h1><MdOutlineTravelExplore className='icon' />Ethio Travel</h1></NavLink>
        </div>

        <div className={active}>
          <ul className="nav-lists flex">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/packages'} className="nav-link">Packages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/about'} className="nav-link">About</NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink to={'/pages'} className="nav-link">Pages</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/news'} className="nav-link">News</NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink to={'/contact'} className="nav-link">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/admin'} className="nav-link">Admin</NavLink>
            </li>

            <button className="btn">
              <NavLink to={'/book'}>BOOK NOW</NavLink>
            </button>

          </ul>
          <div onClick={removeNavBar} className="close-nav-bar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div onClick={showNavBar} className="toggle-nav-bar">
          <TbGridDots className='icon' />
        </div>


      </header>
    </section>
  )
}

export default Navbar