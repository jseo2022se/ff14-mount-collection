import DisplayMount from "../components/DisplayMount"

export default function MountList ({ uniqueMount }) {

    const loaded = () => {

        return (
            <div>
                {uniqueMount.results?.map((mount, index) => {
                    return <div key={index}>
                                <DisplayMount mount={mount} />
                                <button>Add to My Collection</button>
                                <button>Add to wishlist</button>
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