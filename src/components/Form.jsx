import React, { useState } from 'react';
/* eslint-disable react/prop-types */
const Form = ({ field, onSubmit, action }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      { }
      {field.map((input) => (
        <div key={input.name}>
          <label htmlFor={input.name}>{input.label}</label>
          <input
            type={input.type}
            name={input.name}
            id={input.name}
            defaultValue={input.defaultValue || ''}
            onChange={handleChange}
            required={input.required}
          />
        </div>
      ))}
      <button type="submit" className="btn">{action}</button>
    </form>

  );
};

export default Form;
