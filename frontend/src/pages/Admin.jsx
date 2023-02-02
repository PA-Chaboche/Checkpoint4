import axios from "axios";
import { useState, useEffect } from "react";

import "./Admin.css";

const Admin = () => {
  const [content, setContent] = useState("");
  const [aboutIds, setAboutIds] = useState([]);
  const [editId, setEditId] = useState(null);

  const handleUpdate = () => {
    if (content.paragraph && content.title && editId !== null) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/about/${editId}`, content)
        .then(() => {
          alert("ok");
        });
    }
  };

  const handleChange = async (event) => {
    event.preventDefault();
    setEditId(event.target.value);

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/about/${event.target.value}`
      );
      setContent(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getAllAbout = async () => {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/about/`
      );

      setAboutIds(response.data);
    };

    getAllAbout();
  }, []);

  return (
    <div>
      <p>hello admin</p>

      <label htmlFor="aboutId">Choose your about:</label>

      <select value={editId} onChange={handleChange} name="editId" id="editId">
        {aboutIds &&
          aboutIds.map((el) => <option value={el.id}>{el.id}</option>)}
      </select>

      <input
        type="text"
        value={content.title}
        onChange={(e) => {
          setContent((prevState) => ({
            ...prevState,
            title: e.target.value,
          }));
        }}
      />
      <textarea
        type="text"
        value={content.paragraph}
        onChange={(e) => {
          setContent((prevState) => ({
            ...prevState,
            paragraph: e.target.value,
          }));
        }}
      />
      <button onClick={handleUpdate} type="button">
        click
      </button>
    </div>
  );
};

export default Admin;
