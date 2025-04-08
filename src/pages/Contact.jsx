import React, { useState } from 'react';

// This is the contact component that contains the contact form
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  // This function handles the change in the input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // This function handles the blur event of the input fields
  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: value.trim() === '' });
  };
  // This function handles the submit event of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !emailRegex.test(formData.email),
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log('Form submitted:', formData);
    }
  };
  
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.name && <span className="error">Name is required</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
          {errors.email && <span className="error">Please enter a valid email address</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          ></textarea>
          {errors.message && <span className="error">Message is required</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <p>Email me at: bamesb@gmail.com</p>
      <p>Call me at: 240-676-4115</p>
    </div>
  );
}

export default Contact;