import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import waveTop from '../assets/images/dark-wave-haikei-up.svg';
import waveDown from '../assets/images/dark-wave-haikei-down.svg';

const Welcome = () => {

    // Changing code dynamically
  const greetings = ["Hello", "Naki", "Bwakire", "Bwairire", "Naki ore", " Mbuya nakoumeire"];
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 500); // Change the text every 0.5 second

    const timeoutId = setTimeout(() => {
      clearInterval(interval);
      navigate('/home'); // Automatically navigate to the home page after 3 seconds
    }, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeoutId);
    };
  }, [navigate, greetings.length]);

  return (
    <div id="" className="fixed top-0 left-0 w-full min-h-screen bg-darky flex flex-col items-center justify-center z-50">
        {/* <div className="-mt-5 md:-mt-20">
            <img src={waveTop} alt="Wave svg" title="Wave SVG" />
        </div> */}

        <div className="font-normal text-white flex items-center justify-center">
            <span className="text-2xl mr-2"><i className="fa-solid fa-location-dot"></i> </span>
            <h1 className="text-4xl">{greetings[currentGreetingIndex]}</h1>
        </div>
        
        {/* <div className="-mb-5 md:-mb-20">
            <img src={waveDown} alt="Wave svg" title="Wave SVG" />
        </div> */}
    </div>
  )
}

export default Welcome