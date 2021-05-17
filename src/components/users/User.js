import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const User = () => {
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        webiste: "",
        bithday: "",
    });
    const { id } = useParams();
    useEffect(() => {
        loadUser();
    }, []);
    const loadUser = async () => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        setUser(res.data);
    };
    return (
        <div className="container py-4">
            <Link className="btn btn-primary" to="/">
                <FontAwesomeIcon icon={faArrowLeft} />
            </Link>
            <h1 className="display-4">ID de l'utilisateur: {id}</h1>
            <hr />
            <ul className="list-group w-50 dln-user-info">
                <li className="list-group-item">Nom: {user.name}</li>
                <li className="list-group-item">Pseudo: {user.username}</li>
                <li className="list-group-item">Email: {user.email}</li>
                <li className="list-group-item">Numéro de téléphone: {user.phone}</li>
                <li className="list-group-item">Site web: {user.website}</li>
                <li className="list-group-item">Date d'anniversaire: {user.birthday}</li>
            </ul>
        </div>
    );
};

export default User;