// src/app/contact/page.js
'use client';

import { useForm } from '@formspree/react';
import styles from '@/styles/Contact.module.css';
import AnimatedSection from '@/components/AnimatedSection';

export default function Contact() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_FORM_ID");
  if (state.succeeded) {
    return <p>Thank you for your message!</p>;
  }
  return (
    <section className={styles.contact}>
      <h1>Contact</h1>
      <AnimatedSection>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required aria-required="true" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="_replyto" required aria-required="true" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required aria-required="true"></textarea>

          <button type="submit" disabled={state.submitting}>
            {state.submitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      </AnimatedSection>
    </section>
  );
}
