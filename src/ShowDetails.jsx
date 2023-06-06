import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";

const ShowDetails = () => {
  const location = useLocation();
  console.log(location);
  const show = location.state.show;
  return (
    <div className="container mx-auto m-5 ">
      <Card>
        <Card.Img
          variant="top"
          className="pt-3"
          style={{ height: "400px", objectFit: "contain" }}
          src={show.show.image.original}
        />
        <Card.Body>
          <Card.Title>{show.show.name}</Card.Title>
          {/* <Card.Text>{show.show.summary}</Card.Text> */}
          <div dangerouslySetInnerHTML={{ __html: show.show.summary }}></div>
          <Card.Text>{`Ratings: ${show.show.rating.average || 0}`}</Card.Text>
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
          <div>
            <Link to={"/"}>
              {" "}
              <Button variant="primary" className="mt-4">
                Back to Show List
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShowDetails;
