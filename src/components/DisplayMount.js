import { useLocation } from "react-router-dom"

export default function DisplayMount({ mount, removeFromCollection }) {

    let location = useLocation()

    const loaded = () => {

        if (location.pathname === "/mycollection") {
            
            return (
                <div>
                    <img src={mount.image} alt=""/>
                    <h1>{mount.name}</h1>
                    <h2>{mount.description}</h2>
                    <p>{mount.enhanced_description}</p>
                    <button onClick={() => removeFromCollection(mount)}>Remove from Collection</button>
                </div>
            )

        } else {

            return (

                <div>
                    
                    <img src={mount.image} alt=""/>
                    <h1>{mount.name}</h1>
                    <h2>{mount.description}</h2>
                    <p>{mount.enhanced_description}</p>
                    
                </div>
            )
        }

    }

    const loading = () => {
        return <div>No Mount information available...</div>
    }

    return mount ? loaded() : loading()
}