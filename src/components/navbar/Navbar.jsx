import React, { useEffect, useState } from 'react'
import './Navbar.scss'
import avartar from '../../../public/images/avartar.jpg'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false)
    }
    const handleOpen = () => {
        setOpen(!open)
    }
    const { pathname } = useLocation();
    useEffect(() => {

        window.addEventListener('scroll', isActive)
        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])
    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true,
    };
    return (
        <div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
            <div className='container'>
                <div className='logo'>
                    <span className='text'>fiverr</span>
                    <span className='dot'>.</span>
                </div>
                <div className='links'>
                    <span>Fiverr Business</span>
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser && <span>Sign in</span>}
                    {!currentUser?.isSeller && <span>Become a Seller</span>}
                    {!currentUser && <button>Join</button>}
                    {currentUser && <div className="user" onClick={handleOpen}>
                        <img src={avartar} alt="avartar" />
                        <span>{currentUser?.username}</span>
                        {open && <div className="options">
                            {currentUser?.isSeller && (<>
                                <span> Gigs</span>
                                <span>Add New Gig</span>
                            </>)
                            }
                            <span> Orders</span>
                            <span> Messages</span>
                            <span> Logout</span>

                        </div>}
                    </div>
                    }
                </div>

            </div>
            {
                (active || pathname !== '/') &&
                <>
                    <hr />
                    <div className="menu">
                        <span>Graphics & Design</span>
                        <span>Video & Animation</span>
                        <span>Writing & Translation</span>
                        <span>AI Services</span>
                        <span>Digital Marketing</span>
                        <span> Music & Audio</span>
                        <span>Programing & Tech</span>
                        <span>Business</span>
                        <span>Lifestyle</span>
                    </div>
                    <hr />
                </>
            }
        </div>
    )
}

export default Navbar
