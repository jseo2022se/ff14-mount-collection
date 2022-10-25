export default function DisplayMount({ mount }) {

    const loaded = () => {
        return (
            <div>
                <div>
                    <img src={mount.image} alt=""/>
                    <h1>{mount.name}</h1>
                    <h2>{mount.description}</h2>
                    <p>{mount.enhanced_description}</p>
                </div>
            </div>
        )
    }

    const loading = () => {
        return <div>No Mount information available...</div>
    }

    return mount ? loaded() : loading()
}