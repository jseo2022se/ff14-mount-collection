import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/NavigationBar';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import MountList from './pages/MountList';
import MyCollection from './pages/MyCollection';
import MountDetails from './pages/MountDetails';
import Wishlist from './pages/Wishlist';
import PriorityForm from './components/PriorityForm';
import About from './pages/About';



function App() {


  const [mount, setMount] = useState({})

  const [uniqueMount, setUniqueMount] = useState([])

  const [collection, setCollection] = useState([])

  const [wishlist, setWishlist] = useState([])

  const [order, setOrder] = useState(true)


  let init = false

  let navigate = useNavigate()


  const addToCollection = (mount) => {
    setCollection([...collection, mount])
    alert(`Added ${mount.name} to collection.`)
  }

  const addToWishlist = (mount) => {
    setWishlist([...wishlist, mount])
    alert(`Added ${mount.name} to wishlist.`)
  }

  const removeFromCollection = (mount) => {

    let filterCollection = collection.filter((m) => m.id !== mount.id)

    setCollection(filterCollection)
  }

  const removeFromWishlist = (mount) => {

    let filterWishlist = wishlist.filter((m) => m.id !== mount.id)

    setWishlist(filterWishlist)
  }

  const sortList = (uniqueMount, order) => {
    
    let resultsArr = uniqueMount;

    let sortedList
    
    if (order) {
      sortedList = resultsArr.sort((a,b) => a.id - b.id)
      setOrder(!order)

    } else {
      sortedList = resultsArr.sort((a,b) => b.id - a.id)
      setOrder(!order)
    }

    setUniqueMount(sortedList)

    navigate("/mountlist")
  }

  const sortCollection = (collection, order) => {

    let resultsArr = collection;

    let sortedList
    
    if (order) {
      sortedList = resultsArr.sort((a,b) => a.id - b.id)
      setOrder(!order)

    } else {
      sortedList = resultsArr.sort((a,b) => b.id - a.id)
      setOrder(!order)
    }

    setCollection(sortedList)

    navigate("/mycollection")
  }

  const sortWishlist = (wishlist, order) => {

    let resultsArr = wishlist

    let sortedList

    if (order) {
      sortedList = resultsArr.sort((a,b) => a.id - b.id)
      setOrder(!order)

    } else {
      sortedList = resultsArr.sort((a,b) => b.id - a.id)
      setOrder(!order)
    }

    setWishlist(sortedList)

    navigate("/wishlist")

  }

  const addPriorityToWishlist = (value, id) => {

    let updatedWishlist = wishlist.map(m => {

      if (m.id === id) {
        return {...m, ...value}
      } else {
        return m
      }
    })

    setWishlist(updatedWishlist)

    navigate("/wishlist")

  }

  const sortByPriority = (wishlist, order) => {

    let resultsArr = wishlist

    let sortedList

    if (order) {
      sortedList = resultsArr.sort((a,b) => a?.priority - b?.priority)
      setOrder(!order)

    } else {
      sortedList = resultsArr.sort((a,b) => b?.priority - a?.priority)
      setOrder(!order)
    }

    setWishlist(sortedList)

    navigate("/wishlist")

  }

  const getMounts = async () => {

    let randomNum = Math.floor(Math.random() * 298)

    try {

      const response = await fetch(`https://ffxivcollect.com/api/mounts/${randomNum}`)

      const data = await response.json()

      setMount(data)

    } catch (err) {
      
      console.log("Error!" , err)

    } 

  }


  const getMountWithName = async (mountName) => {

    try {
      
      const response = await fetch(`https://ffxivcollect.com/api/mounts?name_en_end=${mountName}`)
  
      const data = await response.json()

      setUniqueMount(data.results)
  
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

      <NavigationBar />

      <Routes>

        <Route
          path='/'
          element={
            <Home 
              mount={mount}
              getMounts={getMounts}
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
              addToCollection={addToCollection}
              addToWishlist={addToWishlist}
              sortList={sortList}
              order={order}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path='/mycollection'
          element={
            <MyCollection 
              collection={collection}
              removeFromCollection={removeFromCollection}
              sortCollection={sortCollection}
              order={order}
            />
          }
        />

        <Route
          path='/mycollection/:index'
          element={
            <MountDetails 
              collection={collection}
            />
          }
        />

        <Route
          path='/wishlist'
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
              sortWishlist={sortWishlist}
              sortByPriority={sortByPriority}
              order={order}
            />
          }
        />

        <Route
          path='/wishlist/:index'
          element={
            <PriorityForm 
              wishlist={wishlist}
              addPriorityToWishlist={addPriorityToWishlist}/>
          }
        />

        <Route path='/about' element={<About />} />

      </Routes>

    </div>
  );
}

export default App;
