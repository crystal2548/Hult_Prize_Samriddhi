import React, { useEffect, useState } from 'react'
import Winnersdata from './winnerdate.jsx'
import { getAllPastWinners } from '../lib/services/pastwinners.service.js';
// import pastWinnersData from '../data/pastWinnersData.js';

const Winner = () => {
  const [pastWinnersData, setPastWinnersData] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getPastWinners() {
      try {
        // setLoading(true);
        const data = await getAllPastWinners();
        if (!data) {
          return
        }
        setPastWinnersData(data);
        // console.log(pastWinnersData);
      }
      catch (err) {
        console.log(err);
      }
    }
    // setLoading(false);
    getPastWinners();
  }, [])
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
