import React from "react";
import "./structure.css";
import Form from "react-bootstrap/Form";

//questa fc contiene il titolo e la barra di ricerca
export default function Header() {
  return (
    <>
      {/* CERCA IL TUO LIBRO */}
      <div className="center-wrapper mt-3">
        <h2 className="text-center py-4 shadow-sm">Cerca il tuo libro</h2>
      </div>
      {/* BARRA DI RICERCA */}
      <Form className="d-flex justify-content-center mt-5">
        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
          <Form.Control type="search" className="shadow" placeholder="scrivi qui!" />
        </Form.Group>
      </Form>
    </>
  );
}
