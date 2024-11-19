// src/utils/gtag.js

export const GA_TRACKING_ID = 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID'; // Replace with your actual GA ID

// Log page views
export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
