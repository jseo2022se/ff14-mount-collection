import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import MountList from './pages/MountList';
import MyCollection from './pages/MyCollection';

function App() {

  const [mount, setMount] = useState({})

  const [uniqueMount, setUniqueMount] = useState({})

  

  let init = false

  const getMounts = async () => {

    let randomNum = Math.floor(Math.random() * 298)

    try {

      const response = await fetch(`https://ffxivcollect.com/api/mounts/${randomNum}`)

      const data = await response.json()

      console.log(data)

      setMount(data)

    } catch (err) {
      
      console.log("Error!" , err)

    }

  }

  const getMountWithName = async (mountName) => {

    try {
      
      const response = await fetch(`https://ffxivcollect.com/api/mounts?name_en_end=${mountName}`)
  
      const data = await response.json()

      console.log(data)

      setUniqueMount(data)
  
    } catch (err) {
      
      console.log("Error! In fetching mount with that name" , err)
  
    }

  }

  useEffect(() => {

    if(!init) {
      getMounts()
      init = true
    }
    
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <Home 
              mount={mount}
              getMountWithName={getMountWithName}
            />
          } 
        />
        <Route
          path='/mountlist'
          element={
            <MountList uniqueMount={uniqueMount}/>
          }
        />
        <Route
          path='/mycollection'
          element={
            <MyCollection />
          }
        />
      </Routes>

    </div>
  );
}

export default App;
