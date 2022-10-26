import DisplayMount from "../components/DisplayMount"

export default function MountList ({ uniqueMount, collection, addToCollection, addToWishlist, sortList, order, wishlist }) {

    const partOfCollection = (mount) => {

        let check = collection.find((m) => m.id === mount.id)

        return check ? true : false
    }

    const partOfWishlist = (mount) => {

        let check = wishlist.find((m) => m.id === mount.id)

        return check ? true : false
        
    }

    const loaded = () => {

        if (uniqueMount.length == 0) {

            return (
                <h1>No mounts found related to the query . . . </h1>
            )

        } else {

            return (

                <div>
                    <button onClick={() => sortList(uniqueMount, order)}>Sort List</button>
                    {uniqueMount.map((mount, index) => {
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
                                    
                                    {
                                        partOfWishlist(mount)
                                        ?
                                        "On Wishlist"
                                        :
                                        <button onClick={() => addToWishlist(mount)}>Add to wishlist</button>
                                    }
                                    
                                    <br /><br />
                                </div>
                    })}
                </div>

            )
        }
    }

    const loading = () => {
        return <div>Loadin....</div>
    }


    return uniqueMount ? loaded() : loading()
}