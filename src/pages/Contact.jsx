import React, { useState } from 'react';
import emailjs from 'emailjs-com';

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

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: value.trim() === '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const newErrors = {
      name: formData.name.trim() === '',
      email: formData.email.trim() === '' || !emailRegex.test(formData.email),
      message: formData.message.trim() === '',
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      // Use EmailJS to send the email
      emailjs
        .send(
          'service_vbwyic6', // Replace with your EmailJS service ID
          'template_dkh5qgh', // Replace with your EmailJS template ID
          {
            from_name: formData.name, // Pass the name
            from_email: formData.email, // Pass the email
            message: formData.message, // Pass the message
          },
          '2qkhAlFerU9ouQ9FK' // Replace with your EmailJS user ID
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            setSuccessMessage('Your message has been sent successfully!');
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.error('FAILED...', error);
          }
        );
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
      {successMessage && <p className="success">{successMessage}</p>}
    </div>
  );
}

export default Contact;