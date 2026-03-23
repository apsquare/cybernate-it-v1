import { createContext, useContext, useState } from "react";

const ContactContext = createContext();

function ContactContextProvider({ children }) {
  const [showContactPopup, setShowContactPopup] = useState(false);
  return (
    <ContactContext.Provider value={{ showContactPopup, setShowContactPopup }}>
      {children}
    </ContactContext.Provider>
  );
}

function useContactContext() {
  const context = useContext(ContactContext);

  if (!context) {
    throw new Error("Using 'useContext' outside the Provider");
  }

  return context;
}

export { ContactContextProvider, useContactContext };
