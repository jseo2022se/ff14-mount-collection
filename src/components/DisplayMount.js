import { Link, useLocation } from "react-router-dom";
import Card from "react-bootstrap/Card";

export default function DisplayMount({ mount, removeFromCollection }) {
  let location = useLocation();

  const loaded = () => {
    if (location.pathname === "/mycollection") {
      return (
        <div>
          <Card>
            <Card.Body border="dark">
              <Card.Link
                as={Link}
                to={`/mycollection/${mount.id}`}
                style={{ width: "300px" }}
              >
                <Card.Img
                  style={{ width: "300px" }}
                  variant="top"
                  src={mount.image}
                  alt={mount.name}
                />
              </Card.Link>
              <Card.Title>
                <h1>
                  {mount.id}. {mount.name}
                </h1>
              </Card.Title>
            </Card.Body>
          </Card>
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => removeFromCollection(mount)}
          >
            Remove from Collection
          </button>
        </div>
      );
    } else if (location.pathname === "/mountlist") {
      return (
        <div>
          <Card border="dark">
            <Card.Img
              variant="top"
              style={{ width: "300px" }}
              src={mount.image}
              alt={mount.name}
            />
            <Card.Body>
              <Card.Title>
                <h1>
                  {mount.id}. {mount.name}
                </h1>
              </Card.Title>
            </Card.Body>
          </Card>
        </div>
      );
    } else {
      if (mount.status === 404) { // runs when there is an error in fetching data from API
        return (
          <div>
            <Card>
              <Card.Body border="dark">
                <Card.Title>
                  <h1>Error in fetching data</h1>
                </Card.Title>
              </Card.Body>
              <Card.Img
                style={{ width: "450px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliwuc2o7LzVuzSC3tqWD7CYOF9f_O0Oa0PA&usqp=CAU"
                alt="noData"
              />
            </Card>
          </div>
        );
      } else { // runs when pathname is '/'
        return (
          <div>
            <Card border="dark">
              <Card.Img
                variant="top"
                style={{ width: "300px" }}
                src={mount.image}
                alt={mount.name}
              />
              <Card.Body>
                <Card.Title>
                  <h1>{mount.name}</h1>
                </Card.Title>
                <Card.Body>
                  <h3>{mount.description}</h3>
                  <Card.Text>{mount.enhanced_description}</Card.Text>
                </Card.Body>
              </Card.Body>
            </Card>
          </div>
        );
      }
    }
  };

  const loading = () => {
    return <div>No Mount information available...</div>;
  };

  return mount ? loaded() : loading();
}
