import React from 'react'
import './Features.scss'
import searchIcon from '../../../public/images/search.png'
import manImg from '../../../public/images/man.png'
const Features = () => {
    return (
        <div className='features'>
            <div className="left">
                <h1>Find the perfect <i>Freelance </i>
                    services for your business
                </h1>
                <div className="search">
                    <div className="searchinput">
                        <img src={searchIcon} alt="iconsearch" />
                        <input type="text" placeholder='Try bulding mobile app' />
                    </div>
                    <button>Search</button>
                </div>
                <div className="popular">
                    <span>Popular: </span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src={manImg} alt="" />
            </div>
        </div>
    )
}

export default Features
