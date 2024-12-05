// src/components/Modal.js
'use client'; // Ensures the component is rendered on the client side

import { useEffect, useRef } from 'react';
import styles from '@/styles/Modal.module.css';

export default function Modal({ isOpen, onClose, title, children }) {
  const modalRef = useRef(null);
  const previousActiveElement = useRef(null);

  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  // Prevent background scrolling when the modal is open
  useEffect(() => {
    if (isOpen) {
      previousActiveElement.current = document.activeElement;
      document.body.style.overflow = 'hidden';
      // Shift focus to the modal
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.focus();
        }
      }, 0);
    } else {
      document.body.style.overflow = 'auto';
      // Return focus to the previous active element
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  // Close the modal when clicking outside the modal content
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className={styles.modalOverlay}
      onClick={handleOverlayClick}
      aria-labelledby="modal-title"
      aria-modal="true"
      role="dialog"
    >
      <div
        className={styles.modalContent}
        tabIndex="-1"
        ref={modalRef}
      >
        <button
          onClick={onClose}
          className={styles.closeButton}
          aria-label="Close Modal"
        >
          &times;
        </button>
        {title && <h2 id="modal-title">{title}</h2>}
        <div className={styles.modalBody}>{children}</div>
      </div>
    </div>
  );
}
