import { Link, useLocation } from "react-router-dom"

export default function DisplayMount({ mount, removeFromCollection }) {

    let location = useLocation()

    const loaded = () => {

        if (location.pathname === "/mycollection") {
            
            return (
                <div>
                    <Link to={`/mycollection/${mount.id}`}>
                        <img src={mount.image} alt={mount.name}/>
                    </Link>
                    <h1>{mount.id}. {mount.name}</h1>
                    <button onClick={() => removeFromCollection(mount)}>Remove from Collection</button>
                </div>
            )

        } else if (location.pathname === "/mountlist") {

            return (

                <div>
                    
                    <img src={mount.image} alt={mount.name}/>
                    <h1>{mount.id}. {mount.name}</h1>
            
                </div>

            )
            
        } else {

            return (

                <div>
                    
                    <img src={mount.image} alt={mount.name}/>
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