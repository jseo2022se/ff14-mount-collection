import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function DisplayWishlist({
  wishlist,
  removeFromWishlist,
  sortWishlist,
  order,
  sortByPriority,
}) 

{
  return (
    <div>
      <button
        style={{ backgroundColor: "pink" }}
        onClick={() => sortWishlist(wishlist, order)}
      >
        Sort List
      </button>
      <div className="divider"></div>
      <button
        style={{ backgroundColor: "gold" }}
        onClick={() => sortByPriority(wishlist, order)}
      >
        Sort By Priority
      </button>
      {wishlist.map((mount, index) => {
        return (
          <div key={index}>
            <Card border="dark">
              <Card.Body>
                <Card.Link as={Link} to={`/wishlist/${mount.id}`}>
                  <Card.Img
                    style={{ width: "300px" }}
                    variant="top"
                    src={mount.image}
                    alt={mount.name}
                  />
                </Card.Link>
                <Card.Title>
                  <h1>
                    {mount.id}. {mount.name}
                  </h1>
                </Card.Title>
              </Card.Body>
            </Card>
            <button
              style={{ backgroundColor: "orange" }}
              onClick={() => removeFromWishlist(mount, order)}
            >
              Remove from Wishlist
            </button>
          </div>
        );
      })}
    </div>
  );
}
