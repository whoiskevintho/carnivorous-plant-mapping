import { useState } from 'react'
import { Analytics } from '@vercel/analytics/react'
import './App.css'
import MapView from './MapView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MapView />
      <Analytics />
    </>
  )
}

export default App
