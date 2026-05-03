import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("idle");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .sendForm("service_efvgj0c", "template_qsuehiq", form.current, {
        publicKey: "SaFva8xJp92R7ij9N",
      })
      .then(
        () => {
          setStatus("success");
          e.target.rest()
        },
        (error) => {
          setStatus("error");
        },
      );
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="row">
          <h2 className="section__title">Get in touch</h2>
          <div className="contact__container">
            <div className="contact__info">
              <h3 className="contact__info--title">AP Plumbing</h3>
              <p className="contact__info--item">
                <FontAwesomeIcon icon="phone" /> (323) 239 7204
              </p>
              <p className="contact__info--item">
                <FontAwesomeIcon icon="envelope" /> applumbingrooter@gmail.com
              </p>
              <p className="contact__info--item">
                <FontAwesomeIcon icon="id-card" /> Lic # 1097944
              </p>
              <a href="tel:3233297204" className="btn">
                Call now
              </a>
            </div>
            <form ref={form} onSubmit={sendEmail} className="contact__form">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="contact__input"
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="contact__input"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="contact__textarea"
              ></textarea>
              <button
                type="submit"
                className="btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              {status === "success" && (
                <p className="contact__success">
                  Thanks for the message! I'll reach out as soon as possible.
                </p>
              )}
              {status === "error" && (
                <p className="contact__error">
                  Something went wrong. Please try again or call directly.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
