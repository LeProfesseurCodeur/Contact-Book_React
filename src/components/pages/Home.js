import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1 class="d-flex justify-content-center dln-title-h1">Bienvenue sur Contact Book</h1>
        <input class="form-control mr-sm-2 w-50 mt-5 mb-5 dln-border-radius" type="search" placeholder="Entrer le nom d'utilisateur (ne fonctionne pas)" aria-label="Search" />
        <Link className="btn text-white dln-icon-user" to="/users/add">
            <FontAwesomeIcon icon={faUser} />
        </Link>
        <table class="table border table-responsive">
          <thead class="thead-dark">
            <tr>
              {/* <th scope="col" class="dln-th">ID</th> */}
              <th scope="col" class="dln-th">Nom</th>
              <th scope="col" class="dln-th">Pseudo</th>
              <th scope="col" class="dln-th">Email</th>
              <th scope="col" class="dln-th">Téléphone</th>
              <th scope="col" class="dln-th">Date d'anniversaire</th>
              <th scope="col" class="dln-th">Site web</th>
              <th scope="col" class="dln-th">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                {/* <th scope="row" class="dln">{index + 1}</th> */}
                <td class="dln">{user.name}</td>
                <td class="dln">{user.username}</td>
                <td class="dln">{user.email}</td>
                <td class="dln">{user.phone}</td>
                <td class="dln">{user.birthday}</td>
                <td class="dln">{user.website}</td>
                <td>
                  <Link class="btn btn-primary mr-2 d-flex justify-content-center" to={`/users/${user.id}`}>
                    Voir
                  </Link>
                  <br />
                  <Link class="btn btn-warning mr-2 d-flex justify-content-center" to={`/users/edit/${user.id}`}>
                    Editer
                  </Link>
                  <br />
                  <Link class="btn btn-danger d-flex justify-content-center" onClick={() => deleteUser(user.id)}>
                    Supprimer
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;