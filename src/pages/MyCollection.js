import DisplayMount from "../components/DisplayMount"

export default function MyCollection ({ collection, removeFromCollection, order, sortCollection }) {

    if (collection.length == 0) {
        return (
            <div>
                <h1>My Collection</h1>
                <br /><br />
                <h2>No collections added . . . </h2>
            </div>
        )
    } else {
        return (
            <div>
                <h1>My Collections</h1>
                <button onClick={() => sortCollection(collection, order)}>Sort</button>
                {collection.map((mount, index) => {

                    return <div key={index}>
                                <DisplayMount mount={mount} removeFromCollection={removeFromCollection}/>
                            </div>
                } )}
                
            </div>
        )
    }
}