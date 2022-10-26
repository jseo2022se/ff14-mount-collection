import DisplayMount from "../components/DisplayMount"

export default function MyCollection ({ collection, removeFromCollection }) {
    return (
        <div>
            <h1>My Collections</h1>
            {collection.map((mount, index) => {

                return <div key={index}>
                            <DisplayMount mount={mount} removeFromCollection={removeFromCollection}/>
                        </div>
            } )}
            
        </div>
    )
}