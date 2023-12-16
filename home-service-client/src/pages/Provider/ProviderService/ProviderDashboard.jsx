import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function ProviderDashboard() {
  const services = useSelector((state) => state.providerServices);

  return (
    <div>
      <h2>Provider Dashboard</h2>
      <Link to="/create-service">
        <button type="button">Create New Service</button>
      </Link>

      <h3>Your Services</h3>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name}
            {' '}
            -
            {' '}
            {service.approved ? 'Approved' : 'Not Approved'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProviderDashboard;
