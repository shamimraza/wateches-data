
import { useEffect, useState } from 'react'
import './App.css'
import Watch from './comp[onents/Watch/Watch';

function App() {

  const [watchData, setWatchData] = useState([]);


  useEffect(() => {
    fetch('https://raw.githubusercontent.com/shamimraza/wateches-data/main/public/Watches.json')
      .then(res => res.json())
      .then(data => setWatchData(data))
  }, [])
  // useEffect(() => {
  //   fetch('Watches.json')
  //     .then(res => res.json())
  //     .then(data => setWatchData(data))
  // }, [])


  return (
    <>
      <h1>Test file</h1>
      {
        watchData.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
