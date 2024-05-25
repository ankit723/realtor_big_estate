import React from "react";
import logo from '../../icons/logo.png'
import classes from './navbar.module.css'

const Navbar=()=>{
    return(
        <>
        <nav className={classes.navbar}>

            <div className={classes.logo}>
                <img src={logo}/>
            </div>

            <div className={classes.links}>
                <ul>
                    <li>Product</li>
                    <li>About Us</li>
                    <li>Blog</li>
                </ul>
            </div>

            <div className={classes.button}>
                <button>GET STARTED</button>
            </div>

        </nav>
        
        </>
    )
}



export default Navbar;