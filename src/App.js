import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import MountList from './pages/MountList';
import MyCollection from './pages/MyCollection';


function App() {


  const [mount, setMount] = useState({})

  const [uniqueMount, setUniqueMount] = useState({})

  const [collection, setCollection] = useState([])


  let init = false

  let navigate = useNavigate()


  const addToCollection = (mount) => {
    setCollection([...collection, mount])
    alert(`Added ${mount.name} to collection.`)

    navigate('/mycollection')
  }


  const removeFromCollection = (mount) => {

    let filterCollection = collection.filter((m) => m.id !== mount.id)

    setCollection(filterCollection)
  }

  const getMounts = async () => {

    let randomNum = Math.floor(Math.random() * 298)

    try {

      const response = await fetch(`https://ffxivcollect.com/api/mounts/${randomNum}`)

      const data = await response.json()

      // console.log(data)

      setMount(data)

    } catch (err) {
      
      console.log("Error!" , err)

    }

  }


  const getMountWithName = async (mountName) => {

    try {
      
      const response = await fetch(`https://ffxivcollect.com/api/mounts?name_en_end=${mountName}`)
  
      const data = await response.json()

      // console.log(data)

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
            <MountList 
              uniqueMount={uniqueMount}
              collection= {collection}
              addToCollection={addToCollection}/>
          }
        />

        <Route
          path='/mycollection'
          element={
            <MyCollection 
              collection={collection}
              removeFromCollection={removeFromCollection}
            />
          }
        />

      </Routes>

    </div>
  );
}

export default App;
