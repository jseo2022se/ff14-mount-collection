import DisplayMount from "../components/DisplayMount"
import Button from 'react-bootstrap/Button'
import Card from "react-bootstrap/Card"

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

        if (uniqueMount.length === 0) {

            return (
                <div>
                    <Card border="dark">
                        <Card.Body>
                            <Card.Title><h1>No mounts found related to the query . . . </h1></Card.Title>
                        </Card.Body>                            
                        <Card.Img style={{width: '300px'}} src="https://i.pinimg.com/originals/08/c8/83/08c883567cb023ade97c70d841d1b3b5.png"/>
                    </Card>
                    
                </div>
                
            )

        } else {

            return (

                <div>
                    <button onClick={() => sortList(uniqueMount, order)}>Sort List</button>
                    {uniqueMount.map((mount, index) => {
                        return <div key={index}>
                                    <DisplayMount mount={mount} />
                                    {
                                        (partOfCollection(mount) || partOfWishlist(mount))
                                        ?
                                        <Button size="sm" variant="info" onClick={() => addToCollection(mount)} disabled>Add to My Collection</Button>
                                        // null
                                        :
                                        <Button size="sm" variant="info" onClick={() => addToCollection(mount)}>Add to My Collection</Button>
                                    }

                                    <div className="divider"></div>
                                    
                                    {
                                        (partOfCollection(mount) || partOfWishlist(mount))
                                        ?
                                        <Button size="sm" variant="primary" onClick={() => addToWishlist(mount)} disabled>Add to wishlist</Button>
                                        // null
                                        :
                                        <Button size="sm" variant="primary" onClick={() => addToWishlist(mount)}>Add to wishlist</Button>
                                    }
                                    
                                    <br /><br />
                                </div>
                    })}
                </div>

            )
        }
    }

    const loading = () => {
        return <div>Loading....</div>
    }


    return uniqueMount ? loaded() : loading()
}