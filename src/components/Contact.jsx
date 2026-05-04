import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BgImage from "../assets/Plumbingbackground.JPEG"

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
          e.target.reset();
        },
        (error) => {
          setStatus("error");
        },
      );
  };

  return (
    <section id="contact" style={{ backgroundImage: `url(${BgImage})`}}>
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
                required
              />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="contact__input"
                required
                onChange={(e) => {
                  let value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 3) {
                    value = `(${value}`;
                  } else if (value.length <= 6) {
                    value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
                  } else {
                    value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
                  }
                  e.target.value = value;
                }}
              />
              <textarea
                name="message"
                placeholder="Message"
                className="contact__textarea"
                required
              ></textarea>
              <button
                type="submit"
                className="btn"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
              <div className="contact__message">
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
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
