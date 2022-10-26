import DisplayMount from "../components/DisplayMount"
import DisplayWishlist from "../components/DisplayWishlist"

export default function Wishlist ({ wishlist, removeFromWishlist, sortWishlist, order }) {

    if (wishlist.length == 0) {
        return (
            <div>
                <h1>Wishlist</h1>
                <br /><br />
                <h2>Wishlist is empty . . . </h2>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Wishlist</h1>
                <DisplayWishlist 
                    wishlist={wishlist}
                    removeFromWishlist={removeFromWishlist}
                    sortWishlist={sortWishlist}
                    order={order}
                />
            </div>
        )
    }
}