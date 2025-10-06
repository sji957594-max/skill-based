// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <div id="specialContentArea">
      {/* Static image-based clickable link */}
      <a
        href="https://wa.link/ayxw8o"
        target="_blank"
        rel="nofollow noopener noreferrer"
        onClick={() => window.gtag_report_conversion?.()}
      >
        <img
          src="/a.webp"
          alt="Special Content"
          style={{ width: "100%", height: "auto" }}
        />
        <img
          src="/click.jpg"
          alt="Click"
          style={{ width: "100%", height: "auto" }}
        />
      </a>
    </div>
  );
};

export default Header;
