import React, { useState, useEffect } from 'react'
import './App.css';
import LoadingScreen from './component/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
  return (
      <>
            {loading === false ? (
          <index/>
      ) : (
        <LoadingScreen />
      )}
      </>
  );
}

export default App;
