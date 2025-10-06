import React, { useEffect } from "react";
import { loadGoogleTag, trackPageViewConversion } from "./utils/gtag";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    loadGoogleTag();
    trackPageViewConversion();
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Your main content */}
      </main>
      <Footer />
    </>
  );
}

export default App;
