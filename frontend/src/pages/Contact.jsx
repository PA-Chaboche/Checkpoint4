import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact-page">
      <div className="component-contact">
        <span className="title-contact">Contact</span>
        <div>
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
        </div>
        <div>
          <input type="email" placeholder="email" />
          <input type="tel" placeholder="phone" />
        </div>
        <div>
          <textarea type="text" />
        </div>
        <input className="button-contact" type="submit" />
      </div>
    </div>
  );
};

export default Contact;
