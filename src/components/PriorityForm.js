import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


export default function PriorityForm({ wishlist, addPriorityToWishlist }) {
  
  // state variables 
  let [priority, setPriority] = useState({
    priority: 0,
  });

  let [wishMount, setWishMount] = useState({});


  let navigate = useNavigate();

  let params = useParams();


  const handleChange = (evt) => {
    setPriority({ ...priority, [evt.target.name]: [evt.target.value] });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addPriorityToWishlist(priority, wishMount.id);
  };

  
  useEffect(() => {
    const mount = wishlist.filter((m) => params.index == m.id);

    return mount.length ? setWishMount(mount[0]) : navigate("/");
  });


  return (
    <div>
      <Card border="dark">
        <Card.Body>
          <Card.Title>
            <h1>{wishMount.name}</h1>
          </Card.Title>
          <Card.Img
            style={{ width: "300px" }}
            src={wishMount.image}
            alt={wishMount.name}
          />
          <form onSubmit={handleSubmit}>
            <label htmlFor="priority">Priority:</label>
            <input
              type="number"
              id="priority"
              name="priority"
              min="1"
              max="3"
              value={priority.priority}
              onChange={handleChange}
            />
            <br />
            <br />
            <Button variant="secondary" size="sm">
              Submit
            </Button>
          </form>
        </Card.Body>
      </Card>
    </div>
  );
}
