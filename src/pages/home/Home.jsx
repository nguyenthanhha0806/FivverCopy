import React from 'react'
import './Home.scss'
import Features from '../../components/features/Features'
import TrustBy from '../../components/trustby/TrustBy'
import Slide from '../../components/slide/Slide'
import { cards } from '../../../data'
import CardItem from '../../components/carditems/CardItem';
import checkIcon from '../../../public/images/check.png'
const Home = () => {
  return (
    <div>
      <Features />
      <TrustBy />
      <Slide arrowsScroll={5} slidesToShow={5}>
        {cards.map(card => <CardItem key={card.id} item={card} />)}
      </Slide>
      <div className="feature">
        <div className="container">
          <div className="item-left">
            <h1>
              A whole world of freelance talent at your fingertips
            </h1>
            <div className="title">
              <img src={checkIcon} alt="" />
              <h4>The best for every budget</h4>
            </div>
            <p>Find high quality service at the every price point. No hourly rates, just based pricing.</p>
            <div className="title">
              <img src={checkIcon} alt="" />
              <h4>Quality work done quickly</h4>
            </div>
            <p>Find high quality service at the every price point. No hourly rates, just based pricing.</p>
            <div className="title">
              <img src={checkIcon} alt="" />
              <h4>Protected payment, every time</h4>
            </div>
            <p>Find high quality service at the every price point. No hourly rates, just based pricing.</p>
            <div className="title">
              <img src={checkIcon} alt="" />
              <h4>24/7 suppport</h4>
            </div>
            <p>Find high quality service at the every price point. No hourly rates, just based pricing.</p>
          </div>
          <div className="item-right">
            <img src="../../../public/images/avartar.jpg" alt="" />
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Home
