import { useState } from "react"

export default function PriorityForm() {

    let [priority, setPriority] = useState({
        priority: 0
    })

    const handleChange = (evt) => {
        // set the wishlist mount's priority
        // setPriority({...priority, [evt.target.name]: evt.target.value})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        // addPriorityToWishlist(priority, mount.id)
    }

    return (
        <div>
            <form>
                <label htmlFor="priority">Priority:</label>
                <input type='number' id="priority" name="priority" value={priority.priority} />
            </form>
        </div>
    )
}