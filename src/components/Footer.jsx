// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <div style={{ padding: "20px", fontSize: "14px", textAlign: "center", background: "#f8f8f8" }}>
      DISCLAIMER: This Website is only for 18+ users. If you are from Andhra Pradesh, Telangana, Orissa,
      Assam, Sikkim, or Nagaland, please leave immediately. Be aware of frauds. We only deal on WhatsApp.
      No real money involvement.
      <br /><br />
      <a
        href="https://wa.link/y0c3ps"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => window.gtag_report_conversion()}
      >
        <img src="/1500x800.png" alt="Click" style={{ width: "100%", height: "auto" }} />
      </a>
    </div>
  );
};

export default Footer;
