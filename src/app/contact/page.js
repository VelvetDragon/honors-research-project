'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import styles from '@/styles/Contact.module.css'; // Adjust path if needed

function ContactForm() {
  // Replace "xeoqdpnw" with your actual Formspree form ID
  const [state, handleSubmit] = useForm("xeoqdpnw");

  // If the form submission succeeds, show a thank you message
  if (state.succeeded) {
    return <p>Thanks for reaching out! I will get back to you soon.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        aria-required="true"
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        required
        aria-required="true"
        rows="5"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        {state.submitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <h1>Contact Me</h1>
      <ContactForm />
    </section>
  );
}
