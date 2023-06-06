import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
const App = () => {
  const [shows, setShows] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <div>
      <Row className="g-4 row">
        {shows.map((show, idx) => (
          <Col key={idx} className="col-4" xl={3}>
            <Card className="">
              <Card.Img
                variant="top"
                src={show.show.image.original}
                className=""
                style={{ aspectRatio: "2/3", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title>{show.show.name}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
              <Button variant="primary">View Details</Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
