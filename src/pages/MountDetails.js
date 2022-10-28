import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ReactAudioPlayer from "react-audio-player";


export default function MountDetails({ collection }) {

  // state variable  
  let [mountDetails, setMountDetails] = useState({});
  
  
  let params = useParams();

  let navigate = useNavigate();


  useEffect(() => {
    const mount = collection.filter((m) => params.index == m.id);

    return mount.length ? setMountDetails(mount[0]) : navigate("/");
  }, []);

  
  return (
    <div>
      <Card border="dark">
        <Card.Body>
          <Card.Title>
            <h1>{mountDetails.name}</h1>
          </Card.Title>
          <Card.Img
            style={{ width: "300px" }}
            src={mountDetails.image}
            alt={mountDetails.name}
          />
          <Card.Subtitle className="mb-2 text-muted">
            <h2>Description: {mountDetails.description}</h2>
          </Card.Subtitle>
          <p>Journal: {mountDetails.enhanced_description}</p>
          <blockquote>
            <p style={{ fontStyle: "italic" }}>{mountDetails.tooltip}</p>
          </blockquote>
          <p>Tradeable: {mountDetails.tradeable ? "Yes" : "No"}</p>
          <p>Owned: {mountDetails.owned}</p>
          {mountDetails.bgm ? (
            <ReactAudioPlayer
              src={mountDetails.bgm}
              autoPlay={false}
              controls={true}
              volume={0.2}
            />
          ) : (
            <p>No BGM</p>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}
