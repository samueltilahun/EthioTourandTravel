import React, {useEffect} from 'react'
import "./footer.css"
import video1 from "../../Assets/video1.mp4"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer grid">
      <div className="video-div">
        <video src={video1} autoPlay muted loop type="video/mp4"></video>
      </div>

      <div className="section-content">
        <div className="contact-div flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us.</h2>
          </div>
          <div data-aos='fade-up' className="input-div">
            <input type="text" placeholder='Enter your email'/>
            <button data-aos='fade-up' className="btn flex">
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footer-card grid">
          <div data-aos='fade-up' className="card-content flex"> 
            <div className="logo-div">
              <a href="#" className="logo"><MdOutlineTravelExplore className='icon' /> Travel.</a>
            </div> 

            <div className="footer-paragraph">
              <p>This is our online Tour and Travel website. We provide you the most relaxing tour guide you have ever participated. You can relay on us about the whole tour. Have fun and spend quality time with your tour. Thank you for choosing us.</p>
            </div>

            <div className="footer-socials flex">
              <AiOutlineTwitter className='icon'/>
              <AiOutlineYoutube className='icon'/>
              <AiOutlineInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footer-links grid">
            <div data-aos='fade-up' data-aos-duration='3000'className="link-group">
              <div className="group-title">
                <span>OUR AGENCY</span>
              </div>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Services
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Insurance
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Agency
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Tourism
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Payment
              </li>
                
            </div>
            <div data-aos='fade-up' data-aos-duration='4000' className="link-group">
              <div className="group-title">
                <span>PARTNERS</span>
              </div>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Bookings
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Rent Cars
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> HostelWorld
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> TripAdvisor
              </li>
                
            </div>
            <div data-aos='fade-up' data-aos-duration='5000' className="link-group">
              <div className="group-title">
                <span>LAST MINUTE</span>
              </div>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Gondar
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Harar
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Southern Ethiopia
              </li>
              <li className='footer-list'>
                <FiChevronRight  className='icon'/> Axum
              </li>
                
            </div>
          </div>

          <div className="footer-div flex">
            <small>Best Tour and Travel Website Made by Samuel Tilahun.</small>
            <small>Copyrights Reserved @2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer