import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const CarDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3001/api/v1/cars/${id}`)
      .then((res) => {
        console.log(res);
      });
  }, [id]);
  return (
    <div className="details-container">
      <div className="details-image">
        <img src="" alt="" />
      </div>
      <div className="details-section">
        <div className="details-header">
          <p className="display-6">Cadillac Escallade</p>
          <p className="lead">Rent for low price</p>
        </div>
        <div className="details">
          <ul>
            <li>ab</li>
            <li>cd</li>
            <li>ef</li>
            <li>gh</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
