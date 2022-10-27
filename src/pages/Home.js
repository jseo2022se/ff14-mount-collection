import DisplayMount from "../components/DisplayMount";
import Form from "../components/Form";

export default function Home ({ mount, getMountWithName }) {
    
    return (
        <div>
            <h1>Home</h1>
            <DisplayMount mount={mount} />
            <Form getMountWithName={getMountWithName}/>
        </div>
    )
}