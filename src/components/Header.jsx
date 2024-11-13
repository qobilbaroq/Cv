import { Navbar } from "flowbite-react";
import React from 'react'

const Header = () => {
  return (
    
      <Navbar fluid rounded className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md ">
        <Navbar.Brand  href="#">
          <span className="self-center whitespace-nowrap h-12 text-2xl font-semibold dark:text-white">Baroq</span>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Navbar.Link>
            2024
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>


    ) 
}

export default Header