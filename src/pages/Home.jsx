import React from 'react'
import { Carousel } from 'antd';
import Stats from "./stats.jsx";
import WinningTeam from "./winningTeam.jsx";
import CardData from "./carddata.jsx";
const contentStyle = {
  margin: 0,
  // height: '600px',
  color: '#fff',
  lineHeight: '600px',
  textAlign: 'center',

};

const Home = () => {

  return (
    <div>
      <Carousel >
        <div>
          <h3 style={contentStyle} className="bg-pink-600 h-[600px] w-full">HULT PRIZE SAMRIDDHI</h3>
        </div>
      </Carousel>
      <CardData />
      <Stats />
      <WinningTeam />



      <div className='w-full min-h-[300px] bg-gray-100 flex items-center justify-center !p-4 '>
        <div className='max-w-5xl w-full flex flex-col items-center justify-center text-center text-black !py-10 !px-10 bg-gray-50 rounded-xl shadow-lg'>
          <h2 className='text-2xl'>Hult Prize at Samriddhi College</h2>
          <p className='text-md'>Contact: hultprize@samriddhi.edu</p>
        </div>
      </div>
    </div>
  )
}

export default Home
