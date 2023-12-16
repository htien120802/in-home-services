import React, { useState } from 'react';

function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceDate: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to a server
  };

  return (
    <div>
      <h2>Book a Service</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Service Date and Time:</label>
          <input
            type="datetime-local"
            name="serviceDate"
            value={formData.serviceDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Additional Comments:</label>
          <textarea
            name="comments"
            value={formData.comments}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Book Service</button>
      </form>
    </div>
  );
}

export default BookingPage;
