import React from "react";
import "./comment.css";

const SingleComment = ({ comment, setComments }) => {
  const handleDelete = (commentId) => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AUTHORIZATION_CODE}`,
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Errore nell'eliminazione del commento");
        setComments((currentComments) => currentComments.filter((c) => c._id !== commentId));
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <div className="mb-3">
      <strong>Valutazione: {comment.rate}/5</strong>
      <p>{comment.comment}</p>
      <button className="delete-button" onClick={() => handleDelete(comment._id)}>
        Elimina
      </button>
    </div>
  );
};

export default SingleComment;
