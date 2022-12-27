import React, { useEffect, useState } from 'react'

const App = () => {

  function loadActivity() {
    setIsLoading(true)
    fetch("http://www.boredapi.com/api/activity/")
      .then((response) => response.json())
      .then((data) => {
        setActivities([...activities, data])
        setIsLoading(false)
      }
      )
  }

  const [activities, setActivities] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { loadActivity() }, [])

  if (activities.length === 0) {
    return <p>Chargement en cours...</p>
  }


  return (
    <div>
      <ul>
        {activities.map((activity) => {
          return <li key={activity.key}>{activity.activity}</li>
        })}
      </ul>

      <button disabled={isLoading} onClick={loadActivity}>Lancer un autre</button>
    </div>

  )
}

export default App