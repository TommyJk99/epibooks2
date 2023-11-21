import React, { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Container, Row, Col } from "react-bootstrap";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/books/${asin}/comments/`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_CODE}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Errore nel caricamento dei commenti");
        return response.json();
      })
      .then((data) => setComments(data))
      .catch((error) => console.error(error.message));
  }, [asin]);

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} xl={6}>
            <AddComment asin={asin} setComments={setComments} />
          </Col>
          <Col className="text-white">
            <CommentList comments={comments} setComments={setComments} asin={asin} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CommentArea;
