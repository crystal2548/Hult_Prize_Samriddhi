import React from 'react'
import Winnersdata from './winnerdate.jsx'


const Winner = () => {
  return (
    <div className="home-container">
      {/* 2025 */}
      <Winnersdata
        first={{
          title: "team Alpha", description: "first tema asjbdasduasduadsuuadasu",
          position: "1st Place"
        }}
        second={{
          title: "team Beta", description: "second tema asjbdasduasduadsuuadasu",
          position: "2nd Place"
        }}
        third={{
          title: "team Gamma", description: "third tema asjbdasduasduadsuuadasu",
          position: "3rd Place"
        }}
        heading="2025 Winners" />
      {/* 2024 */}
      <Winnersdata
        first={{
          title: "team Math", description: "first tema asjbdasduasduadsuuadasu",
          position: "1st Place"
        }}
        second={{
          title: "team Science", description: "second tema asjbdasduasduadsuuadasu",
          position: "2nd Place"
        }}
        third={{
          title: "team Physics", description: "third tema asjbdasduasduadsuuadasu",
          position: "3rd Place"
        }}
        heading="2024 Winners" />
      {/* 2023 */}
      <Winnersdata
        first={{
          title: "team X", description: "first tema asjbdasduasduadsuuadasu",
          position: "1st Place"
        }}
        second={{
          title: "team Y", description: "second tema asjbdasduasduadsuuadasu",
          position: "2nd Place"
        }}
        third={{
          title: "team Z", description: "third tema asjbdasduasduadsuuadasu",
          position: "3rd Place"
        }}
        heading="2023 Winners" />
      <div className='w-full h-[200px] bg-dark-charcoal'></div>

    </div>
  )
}

export default Winner
