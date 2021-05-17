import React from "react";
import { Link } from "react-router-dom";


const Error404 = () => {
  return (
    <div className="error404">
      <h1 className="display-1">Erreur 404</h1>
      <h3>Navré, cette page est inexistent...</h3>
      <Link className="btn btn-success" to="/">Retour à la page d'accueil</Link>
    </div>
  );
};

export default Error404;