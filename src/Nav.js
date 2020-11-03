import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
    const [show, handleShow]= useState(false);

    useEffect(()=> {
        window.addEventListener("scroll", ()=> {
            if(window.scrollY>99) {
                handleShow(true);
            }
            else handleShow(false);
        });
        return ()=> {
            window.removeEventListener("scroll");
        };
    }, []);

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
             className='nav__logo' alt='Netflix Logo'/>
            <img src='https://www.flaticon.com/svg/static/icons/svg/2919/2919600.svg'
             className='nav__avatar' alt='Netflix Avatar'/>
        </div>
    )
}

export default Nav;