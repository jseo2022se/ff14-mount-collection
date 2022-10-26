export default function DisplayWishlist({ wishlist, removeFromWishlist, sortWishlist, order }) {
    return (
        <div>
            <button onClick={() => sortWishlist(wishlist, order)}>Sort List</button>
            {wishlist.map((mount, index) => {
                return <div key={index}>
                            <img src={mount.image} alt={mount.name} />
                            <h1>{mount.id}. {mount.name}</h1>
                            <button onClick={() => removeFromWishlist(mount, order)}>Remove from Wishlist</button>
                        </div>
            })}
        </div>
    )
}