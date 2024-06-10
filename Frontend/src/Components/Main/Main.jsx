import React, { useEffect, useState } from 'react'
import "./main.css"
// import Data from "./Data"
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {

  const [destinations, setDestinations] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const BIRR = " BIRR";

  useEffect(() => {
    Aos.init({duration: 2000})

    const getDestinations = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api`)
        // console.log(response)
        if(!response.ok) {
          throw new Error('Failed to fetch destinations')
        }
        const json = await response.json()
        // console.log(json)
  
          setDestinations(json)
          console.log(destinations.imgSrc)
          // console.log(json)
      }catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    getDestinations();

  }, [])

  return (
    <div className="section main container">
      <h3 data-aos='fade-right' className='title'>
        Most visited <span>destinations</span>
      </h3>

      <div className="section-content grid">
        {destinations && destinations.map((destination) => {
          return(
            <div data-aos='fade-up' className="singleDestination" key={destination._id}>
              <div className="card-image">
              {console.log(`${process.env.REACT_APP_API_BASE_URL}/${destination.imgSrc}`)} 
              <img src={`${process.env.REACT_APP_API_BASE_URL}/${destination.imgSrc}`} alt={destination.destTitle} />

                
              </div>
              <div className="card-info">
                <div className="dest-title">
                  <h3>{destination.destTitle}</h3>
                </div>
                <div className="location flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <p>{destination.location}</p>
                </div>
                <div className="fees flex">
                  <div className="grade">
                    <span>{destination.grade}</span><small>+1</small>
                  </div>
                  <div className="price">
                    <span>{destination.fees}{BIRR}</span>
                  </div>
                </div>
                <div className="description">
                  <p>{destination.description}</p>
                </div>

                <button className="btn flex">
                  DETAILS
                  <HiOutlineClipboardCheck className='icon'/>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Main