import React from "react";
import { apiSections } from "./data";
import { Section } from "./ComponentGroup";
import generateSections from "./function";

const OCP = () => {
  const sections = generateSections(apiSections);

  return (
    <div>
      {sections.map((section, index) => (
        <Section key={index} section={section} />
      ))}
    </div>
  );
};

export default OCP;
