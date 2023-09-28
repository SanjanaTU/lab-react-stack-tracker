import React from "react";
import { useParams } from "react-router-dom";

function TechnologyPage({ technologies }) {
 
  const { slug } = useParams();

  
  const selectedTechnology = technologies.find((tech) => tech.slug === slug);

  
  if (!selectedTechnology) {
    return <div>Technology not found</div>;
  }

  return (
    <div>
      <h1>Technology Details</h1>
      <h2>{selectedTechnology.name}</h2>
      <img src={selectedTechnology.image} alt={selectedTechnology.name} width="100" height="100" />
      <p>{selectedTechnology.description}</p>
    </div>
  );
}

export default TechnologyPage;
