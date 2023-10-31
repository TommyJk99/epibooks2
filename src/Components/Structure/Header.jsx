import React from "react";
import "./structure.css";
import Form from "react-bootstrap/Form";

//questa fc contiene il titolo e la barra di ricerca
//la props setSearchTerm viene dalla Home e serve per aggiornare lo stato alla lettera inserita cosicche...
//...possa utilizzarla anche per filtrare i libri in All the books
export default function Header({ setSearchTerm }) {
  return (
    <>
      {/* CERCA IL TUO LIBRO */}
      <div className="center-wrapper mt-3">
        <h2 className="text-center py-4">Cerca il tuo libro</h2>
      </div>
      {/* BARRA DI RICERCA */}
      <Form className="d-flex justify-content-center mt-5">
        <Form.Group className="mb-3 w-50" controlId="exampleForm.ControlInput1">
          <Form.Control type="search" className="shadow my-placeholder" placeholder="scrivi qui!" onChange={(e) => setSearchTerm(e.target.value)} />
        </Form.Group>
      </Form>
    </>
  );
}
