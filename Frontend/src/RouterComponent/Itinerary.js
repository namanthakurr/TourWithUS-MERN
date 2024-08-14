import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Itinerary = () => {
  const { state } = useParams(); // Get state from URL
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/itinerary/${state}`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [state]);

  return (
    <div>
      <h1>{state} Itinerary</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href={item.link}>Learn More</a>
          </div>
        ))
      ) : (
        <p>No itinerary data available</p>
      )}
    </div>
  );
};

export default Itinerary;
