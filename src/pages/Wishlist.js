import DisplayWishlist from "../components/DisplayWishlist";
import Card from "react-bootstrap/Card";

export default function Wishlist({
  wishlist,
  removeFromWishlist,
  sortWishlist,
  order,
  sortByPriority,
}) 

{
  if (wishlist.length === 0) { // when there are no mounts in wishlist 
    return (
      <div>
        <Card border="dark">
          <Card.Body>
            <Card.Title>
              <h1>Wishlist</h1>
            </Card.Title>
            <br />
            <br />
            <h2>Wishlist is empty . . . </h2>
          </Card.Body>
          <Card.Img
            variant="bottom"
            style={{ width: "300px" }}
            src="https://i.pinimg.com/originals/5a/76/92/5a7692c44aaa0e61177f9d03195c836a.png"
          />
        </Card>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Wishlist</h1>
        <DisplayWishlist
          wishlist={wishlist}
          removeFromWishlist={removeFromWishlist}
          sortWishlist={sortWishlist}
          sortByPriority={sortByPriority}
          order={order}
        />
      </div>
    );
  }
}
