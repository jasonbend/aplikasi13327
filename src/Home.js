import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setNim } from "./redux/actions";

function Home() {
  const name = useSelector((state) => state.app.name);
  const nim = useSelector((state) => state.app.nim);
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleNameChange = (event) => {
    dispatch(setName(event.target.value));
  };

  const handleNimChange = (event) => {
    dispatch(setNim(event.target.value));
  };

  return (
    <div className="container mt-5">
      <div className="mb-3">
        <h1>Home Page</h1>
        <p>
          Welcome, {name} ({nim})
        </p>
        <div className="form-group">
          <label htmlFor="nameInput">Nama:</label>
          <input
            type="text"
            id="nameInput"
            className="form-control"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nimInput">NIM:</label>
          <input
            type="text"
            id="nimInput"
            className="form-control"
            value={nim}
            onChange={handleNimChange}
          />
        </div>
      </div>
      <div className="user-list mt-4">
        <h2>User List</h2>
        {loading ? (
          <p>Loading users...</p>
        ) : (
          <ul className="list-group">
            {users.map((user) => (
              <li key={user.id} className="list-group-item">
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;
