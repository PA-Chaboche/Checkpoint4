import axios from "axios";
import { useState, useEffect } from "react";

import "./Admin.css";

const Admin = () => {
  const [content, setContent] = useState("");

  const handleUpdate = () => {
    if (content.paragraph && content.title) {
      axios
        .put(`${import.meta.env.VITE_BACKEND_URL}/about/1`, content)
        .then(() => {
          alert("ok");
        });
    }
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/about/1`)
      .then(({ data }) => {
        setContent(data);
      });
  }, []);
  return (
    <div>
      <p>hello admin</p>
      <input type="number" />
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
