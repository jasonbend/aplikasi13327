import React, { useContext } from "react";
import { AppContext } from "./context";
import profilePic from "../src/fotoprofil.jpg";
import { useSelector } from "react-redux";

function About() {
  const name = useSelector((state) => state.app.name);
  const nim = useSelector((state) => state.app.nim);

  return (
    <div className="container text-center mt-5">
      <h1>About Page</h1>
      <div className="row justify-content-center mt-4">
        <div className="col-md-4">
          <img
            src={profilePic}
            alt="Profile"
            className="img-fluid rounded-circle border"
            style={{ width: "200px", height: "200px" }}
          />
        </div>
      </div>
      <div className="mt-4">
        <h2>Jason Benedictus</h2>
        <p>NIM: A11.2021.13327</p>
        <p>
          Saya adalah mahasiswa Teknik Informatika Universitas Dian Nuswantoro.
          Saya lahir di Semarang, 11 Januari 2002
        </p>
      </div>
    </div>
  );
}

export default About;
