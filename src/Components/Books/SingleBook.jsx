import Card from "react-bootstrap/Card";
import "./books.css";

export default function SingleBook({ book }) {
  return (
    <Card style={{ width: "14rem" }} className="mx-auto">
      <Card.Img variant="top" src={book.img} />
      <Card.Body>
        <Card.Title title={book.title} className="text-center text-white">
          {book.title}
        </Card.Title>
      </Card.Body>
    </Card>
  );
}
