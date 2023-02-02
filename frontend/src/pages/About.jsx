import axios from "axios";

import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/about/`).then(({ data }) => {
      setContent(data);
    });
  }, []);
  return (
    <section className="about-page">
      {content.map((el) => {
        return (
          <div className="paragraph">
            <h1>{el.title}</h1>
            <br />
            <p>{el.paragraph}</p>
          </div>
        );
      })}
    </section>
  );
};

export default About;
