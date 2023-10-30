import fantasy from "../Utilities/File-json/fantasy.json";
import history from "../Utilities/File-json/history.json";
import horror from "../Utilities/File-json/horror.json";
import romace from "../Utilities/File-json/romance.json";
import scifi from "../Utilities/File-json/scifi.json";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function AllTheBooks() {
  const allBooksVector = [...fantasy, ...history, ...horror, ...romace, ...scifi];

  return (
    <>
      <Container className="mt-4">
        <Row>
          {allBooksVector.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <SingleBook key={book.asin} book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
