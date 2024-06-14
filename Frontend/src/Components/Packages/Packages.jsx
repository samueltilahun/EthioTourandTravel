// Packages.js
import React, { useEffect, useState } from 'react';
import './packages.css';
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    Aos.init({ duration: 2000 });

    const fetchPackages = async () => {
      try {
        const response = await fetch('/api');
        const data = await response.json();

        if (response.ok) {
          setPackages(data);
        } else {
          setError(data.error);
        }
      } catch (err) {
        setError('Failed to fetch packages');
      }
    };

    fetchPackages();
  }, []);

  return (
    <div className="packages">
      <h3 data-aos='fade-right' className='title'>
        Popular <span>Packages</span>
      </h3>

      <div className="package-section grid">
        {error && <p className="error">{error}</p>}
        {packages.map((pkg) => (
          <div data-aos='fade-up' className="singlePackage" key={pkg._id}>
            <div className="card-image">
              <img src={pkg.imgSrc} alt={pkg.destTitle} />
              <div className='overlay'></div>
            </div>
            <div className="card-info">
              <div className="package-title">
                <h3>{pkg.destTitle}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
