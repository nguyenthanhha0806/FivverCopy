import React from 'react'
import './Home.scss'
import Features from '../../components/features/Features'
import TrustBy from '../../components/trustby/TrustBy'
import Slide from '../../components/slide/Slide'
import { cards, projects } from '../../../data'
import CardItem from '../../components/carditems/CardItem';
import checkIcon from '../../../public/images/check.png'
import ProjectCard from '../../components/projectcard/ProjectCard'
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
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      {/* features dark */}

      <div className="feature dark">
        <div className="container">
          <div className="item-left">
            <h1>
              fiverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="../../../public/images/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="../../../public/images/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="../../../public/images/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore fiverr Business</button>
          </div>
          <div className="item-right">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* projectCardSlider */}
      <Slide arrowsScroll={4} slidesToShow={4}>
        {projects.map(card => <ProjectCard key={card.id} card={card} />)}
      </Slide>
    </div>
  )
}

export default Home
