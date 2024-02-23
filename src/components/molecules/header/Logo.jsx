import React from 'react'
import { Link } from 'react-router-dom';

export const Logo = () => {
    const mystyle = {
      border: "1px solid white",
      padding: "10px",
      fontFamily: "Arial",
      width: "110px",
      height: "40px",
      paddingTop: "7px"
    };
  return (
    <div style={mystyle} className='flex'>
        <Link to="/" style={{color: 'white', textDecoration: 'none'}}>
            eCommerce{/* <img src="https://looka.com/s/173343874" alt="ecommerce-logo" /> */}
        </Link>
    </div>
  )
}
