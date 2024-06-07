import React, {useEffect} from 'react'
import "./home.css"
import video1 from "../../Assets/video2.mp4"
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { SiTripadvisor } from 'react-icons/si'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})},[]
  )
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video1} autoPlay muted loop typeof='video/mp4'></video>
      <div className="home-content container">
        <div className="text-div">

          <div data-aos="fade-up" className="small-text">
            <span>Our Packages</span>
          </div>

          <div className="home-text">
            <h1 data-aos="fade-up">Search Your Holiday</h1>
          </div>
        </div>

        <div data-aos="fade-up" className="card-div grid">

          <div className="destination-input">
            <label htmlFor="">Search your destination</label>
            <div className="input flex">
              <input type="text" placeholder='Destination'/>
              <GrLocation className='icon'/>
            </div>
          </div>

          <div className="date-input">
            <label htmlFor="">Select your date</label>
            <div className="input flex">
              <input type="date" placeholder='destination'/>
            </div>
          </div>

          <div className="form-container">
            <div className="label-total flex">
              <label htmlFor="max-price">Max price:</label>
              <h3>5000 BIRR</h3>
            </div>
            <div className="input flex">
              <input type="range" max={5000} min={1000}/>
            </div>
          </div>

          <div className="search-options flex">
            <HiFilter className='icon' />
            <span>MORE FILTERS</span>
          </div>
        </div>

        <div className="footer-icons flex">
          <div className="right-icons">
            <FiFacebook className='icon'/>
            <AiOutlineInstagram className='icon'/>
            <SiTripadvisor className='icon'/>
          </div>

          <div className="left-icons">
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home