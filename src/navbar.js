import React from 'react'
import './navbar.css'
import {HiMenu } from "react-icons/hi";
import { useState } from 'react';
import {useNavigate ,Link} from 'react-router-dom'
const Navbar = () => {
  const nevigate = useNavigate()
    const[value,setvalue]=useState(true)
    function handleclick(){
         setvalue(!value)
        console.log(value)
    }    
    const list=[ "home","tome","choe","rome"]
    function hanldeLogin () {
      nevigate('/login')
    }
    function handleRegister () {
      nevigate('/register')
    }
  return(
    <>
    <nav className='main'>
    <div className='logo'>
    <h2>
    <span>A</span>ditya
    <span>V</span>erma
   </h2>
    </div>
    <div className="list" >
    <ul className='listitem'>
    <li>
    <a href='#'  >home</a>
    
    </li><li>
    <a href='#' onClick={hanldeLogin}>login</a>
    
    </li><li>
    <a href='#' onClick={handleRegister} >register</a>
    
    </li><li>
    <a href='#' >profiles</a>
    
    </li>
    </ul>
    </div>
    <div className='hamberg'>
    <a  href='#' onClick={handleclick}> <HiMenu className='icon'/></a> 
       {value ? list.map((li =><p className='paragraph'>{li}</p>)) : <p></p>}
    
    </div>
    </nav>
    <section className='hero-section'>
    <p className='p'> welcome to our world</p>
    <h1> nice to meet you aditya verma</h1></section>
   
    </>
  )
}

export default Navbar;
