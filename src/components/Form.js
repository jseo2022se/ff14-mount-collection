import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Form({getMountWithName}) {

    let [mountName, setMountName] = useState('')

    let navigate = useNavigate()

    const handleChange = (e) => {
        setMountName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        getMountWithName(mountName)
        navigate("/mountlist")
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <br />
                <input 
                    id="search"
                    type="text"
                    value={mountName}
                    onChange={handleChange}
                />
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}