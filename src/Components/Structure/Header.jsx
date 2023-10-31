import React from "react";
import "./structure.css";
import Form from "react-bootstrap/Form";

//questa fc contiene il titolo e la barra di ricerca
//la props setSearchTerm viene dalla Home e serve per aggiornare lo stato alla lettera inserita cosicche...
//...possa utilizzarla anche per filtrare i libri in All the books
export default function Header() {
  return (
    <>
      {/* CERCA IL TUO LIBRO */}
      <div className="center-wrapper mt-3">
        <h2 className="text-center py-4">Cerca il tuo libro</h2>
      </div>
    </>
  );
}
