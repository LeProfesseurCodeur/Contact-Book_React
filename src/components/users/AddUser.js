import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";

const AddUser = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",  
        phone: "",
        birthday: "",
        website: "",
    });

    const { name, username, email, phone, website, birthday } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async e => {
        e.preventDefault();
        await axios.post("http://localhost:3001/users", user);
        history.push("/");
    };
    return (
        <div className="container">
            <div className="w-50 mx-auto shadow pt-5">
                <h2 className="text-center mb-4 dln-title-h1">Ajouter un utilisateur</h2>
                <form onSubmit={e => onSubmit(e)} class="mt-5">
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entrer votre nom"
                            name="name"
                            value={name}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entrer votre pseudo"
                            name="username"
                            value={username}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Entrer votre adresse e-mail"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entrer votre numéro de téléphone"
                            name="phone"
                            value={phone}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="date"
                            className="form-control form-control-lg"
                            name="birthday"
                            value={birthday}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Entrer votre site internet"
                            name="website"
                            value={website}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="dln-btn-add">
                        <button className="btn btn-primary btn-block dln-btn-blue mt-5 mb-5">Ajouter un utilisateur</button>
                        <a href="/" className="btn btn-danger btn-block mt-5 mb-5">Annuler</a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;