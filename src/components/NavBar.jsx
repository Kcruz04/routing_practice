import React from 'react'
import { Link} from "react-router-dom";


const NavBar = () => {
    return (
        <div >
            <h1>Nav Bar</h1>
            <ul className='navbar' >
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li><Link to ={"/random"}>Random</Link></li>
                
            </ul>
        </div>
    )
}

export default NavBar