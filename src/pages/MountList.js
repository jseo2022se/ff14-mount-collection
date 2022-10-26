import DisplayMount from "../components/DisplayMount"

export default function MountList ({ uniqueMount, collection, addToCollection, addToWishlist }) {

    const partOfCollection = (mount) => {

        let check = collection.find((m) => m.id === mount.id)

        return check ? true : false
    }



    const loaded = () => {

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
                                <button onClick={() => addToWishlist(mount)}>Add to wishlist</button>
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