import React from 'react'
import Winnersdata from './winnerdate.jsx'


import pastWinnersData from '../data/pastWinnersData.js';

const Winner = () => {
  return (
    <div className="home-container">
      {pastWinnersData.map((data, index) => (
        <Winnersdata
          key={index}
          first={data.first}
          second={data.second}
          third={data.third}
          heading={data.heading}
        />
      ))}
      <div className='w-full h-[200px] bg-dark-charcoal'></div>

    </div>
  )
}

export default Winner
