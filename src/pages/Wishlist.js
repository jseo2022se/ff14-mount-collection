import DisplayMount from "../components/DisplayMount"

export default function Wishlist ({ wishlist, removeFromWishlist }) {

    return (
        <div>
            <h1>Wishlist</h1>
            {wishlist.map((mount, index) => {
                return <div key={index}>
                            {mount.name}
                            <button onClick={() => removeFromWishlist(mount)}>Remove from Wishlist</button>
                        </div>
            })}
        </div>
    )
}