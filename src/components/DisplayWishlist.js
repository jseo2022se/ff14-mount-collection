import { Link } from "react-router-dom"

export default function DisplayWishlist({ wishlist, removeFromWishlist, sortWishlist, order, sortByPriority }) {
    return (
        <div>
            <button onClick={() => sortWishlist(wishlist, order)}>Sort List</button>
            <div className="divider"></div>
            <button onClick={() => sortByPriority(wishlist, order)}>Sort By Priority</button>
            {wishlist.map((mount, index) => {
                return <div key={index}>
                            <Link to={`/wishlist/${mount.id}`}>
                                <img src={mount.image} alt={mount.name} />
                            </Link>
                            <h1>{mount.id}. {mount.name}</h1>
                            <button onClick={() => removeFromWishlist(mount, order)}>Remove from Wishlist</button>
                        </div>
            })}
        </div>
    )
}