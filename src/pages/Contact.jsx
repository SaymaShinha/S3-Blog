import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ from_name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again later.");
        },
      );
  };

  return (
    <div className="container" style={{ width: "80%" }}>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>

        <input
          type="text"
          name="from_name"
          value={formData.name}
          onChange={handleChange}
          title="name"
          placeholder="Name"
          required
        />
        <label>Email: </label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          title="email"
          placeholder="Email"
          required
        />
        <label>Message: </label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          title="message"
          placeholder="Message"
          required
        />
        <button className="btn btn-info" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
