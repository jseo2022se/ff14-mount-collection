import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

export default function PriorityForm({wishlist, addPriorityToWishlist}) {

    let [priority, setPriority] = useState({
        priority: 0
    })

    let [wishMount, setWishMount] = useState({})

    let navigate = useNavigate();
    
    let params = useParams();

    const handleChange = (evt) => {
        console.log(evt.target.value)
        setPriority({...priority, [evt.target.name]: [evt.target.value]})
        console.log(priority)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        addPriorityToWishlist(priority, wishMount.id)
        
    }

    useEffect(() => {

        const mount = wishlist.filter((m) => params.index == m.id)

        return mount.length ? setWishMount(mount[0]) : navigate("/")

    })

    return (
        <div>
            <h1>{wishMount.name}</h1>
            <img src={wishMount.image} alt={wishMount.name} />
            <form onSubmit={handleSubmit}>
                <label htmlFor="priority">Priority:</label>
                <input 
                    type='number' 
                    id="priority" 
                    name="priority" 
                    min="1" 
                    max="3" 
                    value={priority.priority}
                    onChange={handleChange} />
                <br /><br />
                <button>Submit</button>
            </form>
        </div>
    )
}