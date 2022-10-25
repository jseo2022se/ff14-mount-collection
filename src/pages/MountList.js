import DisplayMount from "../components/DisplayMount"

export default function MountList ({ uniqueMount, collection, addToCollection }) {

    const partOfCollection = (mount) => {
        let check = collection.find((m) => m.id === mount.id)
        if (check) {
            return true
        } else {
            return false
        }
    }



    const loaded = () => {
        // console.log(uniqueMount)
        return (
            <div>
                {uniqueMount.results?.map((mount, index) => {
                    return <div key={index}>
                                <DisplayMount mount={mount} />
                                {
                                    partOfCollection(mount)
                                    ?
                                    "Already collected"
                                    :
                                    <button onClick={() => addToCollection(mount)}>Add to My Collection</button>
                                }
                                <div className="divider"></div>
                                <button>Add to wishlist</button>
                                <br /><br />
                            </div>
                })}
            </div>
        )
    }

    const loading = () => {
        return <div>Loadin....</div>
    }


    return uniqueMount ? loaded() : loading()
}