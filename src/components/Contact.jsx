import React from "react";
import "../styles/Contact.css";

// contact form
function Contact() {
  return (
    <div className="contact__form">
      <section id="contact" class="section">
        <article>
          <h1 class="heading">Contact</h1>
        </article>
        <div
          class="contact-container"
          method="post"
          action="./public/php/contact-form.php"
          enctype="multipart/form-data"
        >
          <form class="contact-form" action="/" method="post">
            <input
              class="contact-input contact-name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <input
              class="contact-input contact-email"
              name="email"
              type="email"
              placeholder="Email"
              required
            />
            <input
              class="contact-input contact-subject"
              name="subject"
              type="text"
              placeholder="Subject"
              required
            />
            <textarea
              class="contact-message"
              name="message"
              placeholder="Message"
            ></textarea>
            <h3 class="settled-message"></h3>
            <button class="btn btn-submit">Contact</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
