import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <section id="contact">
    <div class="section-content">
      <h1>Contact Me</h1>
      <p>If you have any questions, feel free to reach out to me!</p>
      <form action="https://formspree.io/your-email@example.com" method="POST">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="message" rows="6" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  </section>
  )
}

export default Contact