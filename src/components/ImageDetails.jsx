import React from "react";
import { useParams } from "react-router-dom";
import synthesis from "../components/Synthesis.jsx"; // Import array of image URLs

const ImageDetails = () => {
  const { id } = useParams();
  const imageIndex = parseInt(id) - 1; // Adjust index to match array index
  const image = synthesis[imageIndex];

  return (
    <div>
      <h1>{image.title}</h1>
      <img src={image.imageUrl} alt={image.title} />
      <p>{image.description}</p>
      {/* Add links if available */}
      {image.links && (
        <ul>
          {image.links.map((link, index) => (
            <li key={index}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageDetails;
