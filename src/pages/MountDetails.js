import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

export default function MountDetails ({ collection }) {

    let params = useParams();

    let navigate = useNavigate();

    let [mountDetails, setMountDetails] = useState({});

    useEffect(() => {
        
        const mount = collection.filter((m) => params.index == m.id)

        return mount.length ? setMountDetails(mount[0]) : navigate("/")
        
    }, [])


    return (
        <div>

            <h1>{mountDetails.name}</h1>
            <img src={mountDetails.image} alt={mountDetails.name}/>
            <h2>Description: {mountDetails.description}</h2>
            <p>Journal: {mountDetails.enhanced_description}</p>
            <p>Tooltip: {mountDetails.tooltip}</p>
            <p>Tradeable: {mountDetails.tradeable ? "Yes" : "No"}</p>
            <p>Owned: {mountDetails.owned}</p>

        </div>
    )
}