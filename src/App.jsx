import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const App = () => {
  const [shows, setShows] = useState(null);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => setShows(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center m-5">
        Welcome to the <span className="text-primary"> ShowDB</span>
      </h2>
      <Row className="g-4 row">
        {shows?.map((show, idx) => (
          <Col key={idx} className="col-4" xl={3} xs={12}>
            <Card className="">
              <Card.Img
                variant="top"
                src={show.show.image.original}
                className=""
                style={{ aspectRatio: "2/3", objectFit: "cover" }}
              />
              <Card.Body className="">
                <Card.Title>{show.show.name}</Card.Title>
                <Card.Text>
                  {`Ratings: ${show.show.rating.average || 0}`}
                </Card.Text>
                <div>
                  Genres:{" "}
                  {show.show.genres.map((e) => (
                    <p
                      key={e}
                      style={{
                        padding: 0,
                        margin: 0,
                        display: "inline",
                        marginRight: "10px",
                      }}
                    >
                      {e}
                    </p>
                  ))}
                </div>
                <div className=" my-3">
                  <Link to={`show/${show.show.id}`} state={{ show: show }}>
                    <Button variant="primary">View Details</Button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default App;
