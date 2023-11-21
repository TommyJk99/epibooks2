import { useParams } from "react-router-dom";
import fantasy from "../Utilities/File-json/fantasy.json";
import history from "../Utilities/File-json/history.json";
import horror from "../Utilities/File-json/horror.json";
import romance from "../Utilities/File-json/romance.json";
import scifi from "../Utilities/File-json/scifi.json";
import "./review-page.css";
import { Container, Row, Col } from "react-bootstrap";
import CommentArea from "../Comment/CommentArea";

const ReviewPage = () => {
  const { id } = useParams();
  const allBooks = [...history, ...fantasy, ...horror, ...romance, ...scifi];
  const book = allBooks.find((b) => b.asin === id);

  if (!book) {
    return <h3 className="text-center mt-5">Libro non trovato :(</h3>;
  }

  //questo mi serve per portare la pagina in alto quando cambio route, non so perche non me lo fa in automatico
  const render = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      {render()}
      <div className="mt-5 ms-5 background">
        <Container>
          <Row>
            <Col xs={4}>
              <img className="img-fluid" src={book.img} alt="" width={"220px"} />
            </Col>
            <Col xs={5}>
              <p className="text-white fs-4">
                <strong>TITLE: </strong>
                {book.title}
              </p>
              <p>{book.description}</p>
            </Col>
          </Row>
        </Container>
        <CommentArea asin={id} />
      </div>
    </>
  );
};
export default ReviewPage;
