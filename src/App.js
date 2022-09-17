import React, { useState } from 'react'
import './App.css'

function App() {
  const [CTime, SetCTime] = useState()
  const [CDate, SetCDate] = useState()

  const updateTime = () => {
    SetCTime(new Date().toLocaleTimeString())
    SetCDate(new Date().toDateString())
  }

  setInterval(updateTime, 1000)

  return (
    <div>
      <h1>{CTime}</h1>
      <h2>{CDate}</h2>
    </div>
  )
}

export default App
