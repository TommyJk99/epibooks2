import fantasy from "../Utilities/File-json/fantasy.json";
import history from "../Utilities/File-json/history.json";
import horror from "../Utilities/File-json/horror.json";
import romance from "../Utilities/File-json/romance.json";
import scifi from "../Utilities/File-json/scifi.json";
import SingleBook from "./SingleBook";
import { Col, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

export default function AllTheBooks({ searchTerm }) {
  const [currentBookType, SetCurrentBookType] = useState("allBooks");
  const [loading, setLoading] = useState(false);

  const bookType = {
    allBooks: [...history, ...fantasy, ...horror, ...romance, ...scifi],
    history,
    fantasy,
    horror,
    romance,
    scifi,
  };

  //Ho creato questa funzione per due motivi:
  //1 mi finge un caricamento alla pressione della tipologia dei bottoni
  //2 aggiorno lo stato del libro
  const handleButtonClick = (type) => {
    setLoading(true); // Mostra lo spinner
    SetCurrentBookType(type);
    setTimeout(() => {
      setLoading(false);
    }, 750);
  };

  const filteredBooks = bookType[currentBookType].filter((book) => (book.title ? book.title.toLowerCase().includes(searchTerm.toLowerCase()) : false));

  return (
    <Container className="mt-4">
      {loading ? (
        <div className="d-flex justify-content-center mt-5" style={{ height: "100vh", color: "#2c3e50" }}>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <>
          <div className="category-links">
            {Object.keys(bookType).map((type) => (
              <button key={type} onClick={() => handleButtonClick(type)} className={currentBookType === type ? "active" : ""}>
                {type.toUpperCase()}
              </button>
            ))}
          </div>
          <Row>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <SingleBook key={book.asin} book={book} />
                </Col>
              ))
            ) : (
              <Col className="text-center" xs={12}>
                <p className="fs-4" style={{ color: "#2c3e50" }}>
                  Nessun risultato per: "{searchTerm}"
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" fill="#2c3e50" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                </svg>
              </Col>
            )}
          </Row>
        </>
      )}
    </Container>
  );
}
