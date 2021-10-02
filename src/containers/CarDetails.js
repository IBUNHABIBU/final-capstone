import React from 'react';

const CarDetails = () => (
  <div>
    <div className="ditails-image">
      <img src="" alt="" />
    </div>
    <div className="details-section">
      <div className="details-header">
        <h1>Cadillac Escallade</h1>
        <p>Rent for low price</p>
      </div>
      <div className="details">
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
    </div>
  </div>
);

export default CarDetails;
