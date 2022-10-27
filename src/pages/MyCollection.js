import DisplayMount from "../components/DisplayMount"
import Card from "react-bootstrap/Card"

export default function MyCollection ({ collection, removeFromCollection, order, sortCollection }) {

    if (collection.length === 0) {
        return (
            <div>
                <Card border="dark">
                    <Card.Body>
                        <Card.Title><h1>My Collection</h1></Card.Title>
                        <br /><br />
                        <h2>No collections added . . . </h2>
                    </Card.Body>                 
                    <Card.Img style={{width: '300px'}} src="https://i.pinimg.com/originals/5a/76/92/5a7692c44aaa0e61177f9d03195c836a.png"/>
                </Card>

            </div>
        )
    } else {
        return (
            <div>
                <h1>My Collections</h1>
                <button style={{backgroundColor: 'pink'}}onClick={() => sortCollection(collection, order)}>Sort</button>
                {collection.map((mount, index) => {

                    return <div key={index}>
                                <DisplayMount mount={mount} removeFromCollection={removeFromCollection}/>
                            </div>
                } )}
                
            </div>
        )
    }
}