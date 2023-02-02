import axios from "axios";

import { useState, useEffect } from "react";
import "./About.css";

const About = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/about/1`)
      .then(({ data }) => {
        setContent(data);
      });
  }, []);
  return (
    <section className="about-page">
      <div className="paragraph">
        <h1>{content.title}</h1>
        <br />
        <p>{content.paragraph}</p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          dicta sunt vitae autem obcaecati facilis, perferendis error eveniet
          nesciunt a dolores nostrum fugiat libero ab est at tenetur corporis
          eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci dicta sunt vitae autem obcaecati facilis, perferendis error
          eveniet nesciunt a dolores nostrum fugiat libero ab est at tenetur
          corporis eius!Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Adipisci dicta sunt vitae autem obcaecati facilis, perferendis
          error eveniet nesciunt a dolores nostrum fugiat libero ab est at
          tenetur corporis eius!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci dicta sunt vitae autem obcaecati facilis,
          perferendis error eveniet nesciunt a dolores nostrum fugiat libero ab
          est at tenetur corporis eius! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci dicta sunt vitae autem obcaecati facilis,
          perferendis error eveniet nesciunt a dolores nostrum fugiat libero ab
          est at tenetur corporis eius! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci dicta sunt vitae autem obcaecati facilis,
          perferendis error eveniet nesciunt a dolores nostrum fugiat libero ab
          est at tenetur corporis eius!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          dicta sunt vitae autem obcaecati facilis, perferendis error eveniet
          nesciunt a dolores nostrum fugiat libero ab est at tenetur corporis
          eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci dicta sunt vitae autem obcaecati facilis, perferendis error
          eveniet nesciunt a dolores nostrum fugiat libero ab est at tenetur
          corporis eius! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Adipisci dicta sunt vitae autem obcaecati facilis, perferendis
          error eveniet nesciunt a dolores nostrum fugiat libero ab est at
          tenetur corporis eius! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci dicta sunt vitae autem obcaecati facilis,
          perferendis error eveniet nesciunt a dolores nostrum fugiat libero ab
          est at tenetur corporis eius! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci dicta sunt vitae autem obcaecati facilis,
          perferendis error eveniet nesciunt a dolores nostrum fugiat libero ab
          est at tenetur corporis eius!
        </p>
        <br />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci
          dicta sunt vitae autem obcaecati facilis, perferendis error eveniet
          nesciunt a dolores nostrum fugiat libero ab est at tenetur corporis
          eius! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Adipisci dicta sunt vitae autem obcaecati facilis, perferendis error
          eveniet nesciunt a dolores nostrum fugiat libero ab est at tenetur
          corporis eius! Lorem ipsum, dolor sit amet consectetur adipisicing
          elit. Adipisci dicta sunt vitae autem obcaecati facilis, perferendis
          error eveniet nesciunt a dolores nostrum fugiat libero ab est at
          tenetur corporis eius!Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Adipisci dicta sunt vitae autem obcaecati facilis,
          perferendis error eveniet nesciunt a dolores nostrum fugiat libero ab
          est at tenetur corporis eius!
        </p>
      </div>
    </section>
  );
};

export default About;
