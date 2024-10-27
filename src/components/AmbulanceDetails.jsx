import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AmbulanceDetails() {
  const { id } = useParams();
  const [ambulance, setAmbulance] = useState(null);

  useEffect(() => {
    axios.get('/ambulances.json')
      .then(response => {
        const foundAmbulance = response.data.find(a => a.id === parseInt(id));
        setAmbulance(foundAmbulance);
      })
      .catch(error => {
        console.error('Error fetching ambulance details:', error);
      });
  }, [id]);

  if (!ambulance) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{ambulance.type}</h1>
      <p>Cost: ${ambulance.cost}</p>
      <p>Availability: {ambulance.availability}</p>
      <p>{ambulance.description}</p>
    </div>
  );
}

export default AmbulanceDetails;
