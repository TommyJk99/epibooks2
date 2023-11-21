import React, { useState } from "react";
import "./comment.css";
import { Container } from "react-bootstrap";

const AddComment = ({ asin, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    const commentData = {
      comment: newComment,
      rate: rating,
      elementId: asin,
    };

    fetch("https://striveschool-api.herokuapp.com/api/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_CODE}`,
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Errore nell'invio del commento");
        return response.json();
      })
      .then((data) => {
        setComments((currentComments) => [...currentComments, data]);
        setNewComment("");
        setRating(1);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="mt-5">
        <div className="d-flex justify-content-center  position-relative flex-column">
          <div className="textarea-container position-relative">
            <textarea className="shadow-sm" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Scrivi la tua recensione qui" />
            <input className="textarea-input" type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Valutazione (1-5)" />
            <button className="textarea-button" type="submit">
              Invia
            </button>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default AddComment;
