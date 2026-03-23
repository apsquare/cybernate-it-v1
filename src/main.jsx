import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ContactContextProvider } from "./components/Contact/ContactContext.jsx";

import App from "./App.jsx";
import ScrollToTop from "./components/Support/ScrollToTop.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContactContextProvider>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </ContactContextProvider>
  </StrictMode>,
);
