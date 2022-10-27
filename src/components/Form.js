import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'

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
            <form style={{marginLeft: '20px'}} onSubmit={handleSubmit}>
                <label htmlFor="search">Search:</label>
                <br />
                <input 
                    id="search"
                    type="text"
                    value={mountName}
                    onChange={handleChange}
                />
                <Button variant="outline-secondary" size="sm">Search</Button>
            </form>
        </div>
    )
}