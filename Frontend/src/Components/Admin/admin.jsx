import React, { useEffect, useState, useRef} from 'react'
import "./admin.css"

const Admin = () => {

  const [destTitle, setDestTitle] = useState('')
  const [location, setLocation] = useState('')
  const [grade, setGrade] = useState('')
  const [fees, setFees] = useState('')
  const [description, setDescription] = useState('')
  const [imgSrc, setImgSrc] = useState(null)
  const [error, setError] = useState(null)


  const handelSubmit = async (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('image', imgSrc);
    formData.append('destTitle', destTitle);
    formData.append('location', location);
    formData.append('grade', grade);
    formData.append('fees', fees);
    formData.append('description', description);

    // const tourDetail = {imgSrc, destTitle, location, grade, fees, description}
    // console.log(tourDetail)

    const response = await fetch('/api', {
      method: 'POST',
      body: formData, 
    })

    try {
      const json = await response.json()
      if(!response.ok) { 
        setError(json.error)
      } else {  
        console.log("new added", json)

        setImgSrc(null);
        setDestTitle('');
        setLocation('');
        setGrade('');
        setFees('');
        setDescription('');
        setError('');
      }
    }catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="section main container">
      <h3 className='title'>
        <h2>Adding a New Destination</h2>
      </h3>

      <div className="section-content">
        <div className="form-div">
          <form onSubmit={handelSubmit}>
              <label htmlFor="imageScr">Image</label>
              <input type="file" accept='image/*' onChange={(e) => setImgSrc(e.target.files[0])}/>
              <label htmlFor="imageScr">Destination Title</label>
              <input type="text" onChange={(e) => setDestTitle(e.target.value)} value={destTitle}/>
              <label htmlFor="imageScr">Location</label>
              <input type="text" onChange={(e) => setLocation(e.target.value)} value={location}/>
              <label htmlFor="imageScr">Grade</label>
              <input type="text" onChange={(e) => setGrade(e.target.value)} value={grade}/>
              <label htmlFor="imageScr">Fees</label>
              <input type="text" onChange={(e) => setFees(e.target.value)} value={fees}/>
              <label htmlFor="imageScr">Description</label>
              <input type="text" onChange={(e) => setDescription(e.target.value)} value={description}/>

              <button>Submit</button>
              {error}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Admin