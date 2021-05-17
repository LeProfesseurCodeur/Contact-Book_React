import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <h1 class="d-flex justify-content-center mt-5 mb-5">Bienvenue sur votre Dashboard</h1>
        <table class="table border table-responsive">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nom</th>
              <th scope="col">Pseudo</th>
              <th scope="col">Email</th>
              <th scope="col">Téléphone</th>
              <th scope="col">Site web</th>
              <th scope="col">Date d'anniversaire</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row" class="dln">{index + 1}</th>
                <td class="dln">{user.name}</td>
                <td class="dln">{user.username}</td>
                <td class="dln">{user.email}</td>
                <td class="dln">{user.phone}</td>
                <td class="dln">{user.website}</td>
                <td class="dln">{user.birthday}</td>
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