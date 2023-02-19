import React from "react";
import CreateCoolWebsite from "../../components/create cool website";
import ContactMap from "./contact map";
import ContactMessage from "./contact message";
import ContactPhoto from "./contact photo";

const Contact = () => {
  return (
    <div>
      <ContactPhoto />
      <ContactMessage />
      <ContactMap />
      <CreateCoolWebsite />
    </div>
  );
};

export default Contact;
