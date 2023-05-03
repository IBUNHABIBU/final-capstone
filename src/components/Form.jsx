import React, { useState } from 'react';
/* eslint-disable react/prop-types */
const Form = ({
  field, onSubmit, action, message, errors,
}) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files && files.length > 0) {
      setFormData((prevState) => ({ ...prevState, [name]: files[0] }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="form">
      { message && <span className="msg">{message}</span> }
      {errors.length ? (
          <div className="error">
            {(!Array.isArray(errors)) ? [(<h4 key={errors}>{errors}</h4>)]

              : [
                (
                  <>
                    <h4>Oops! your form could not be saved</h4>
                    <p>Please correct the following errors:</p>

                    <ul>
                      {errors.map((error) => (
                        <li key={error}>{error}</li>
                      ))}
                    </ul>
                  </>
                ),

              ]}
          </div>
      ) : null }
      <form onSubmit={handleSubmit}>

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
              accept="image/*"
            />
          </div>
        ))}
        <button type="submit" className="btn">{action}</button>
      </form>
    </div>
  );
};

export default Form;
