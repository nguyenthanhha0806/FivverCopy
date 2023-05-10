import React from 'react'
import './CardItem.scss'
import { Link } from 'react-router-dom'
function CardItem({ item }) {
    return (
        <Link to="/gigs?cat=design">
            <div className='carditem'>
                <span className='desc'>{item.desc}</span>
                <span className='title'>{item.title}</span>
                <img src={item.img} alt="cardimg" />
            </div>
        </Link>
    )
}

export default CardItem
