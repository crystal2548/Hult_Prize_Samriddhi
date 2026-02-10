import React, { useState, useRef, useEffect } from 'react';
import { Input, Select, Button, message } from 'antd';
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
  TwitterOutlined
} from '@ant-design/icons';
import emailjs from '@emailjs/browser';
import './styles/contact.css';
import { contactSubjects } from '../data/formOptions.js';

const { TextArea } = Input;
const { Option } = Select;

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle form input changes
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      message.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      message.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // EmailJS configuration
      // IMPORTANT: Replace these with your actual EmailJS credentials
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


      await emailjs.send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Not provided',
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      message.success('Message sent successfully! We will get back to you soon.');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      message.error('Failed to send message. Please try again or contact us directly via email.');
    } finally {
      setLoading(false);
    }
  };

  const subjects = contactSubjects;

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="contact-hero-title">Get In Touch</h1>
          <p className="contact-hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Form */}
            <div className="contact-form-wrapper">
              <h2 className="contact-section-title">Send us a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label className="form-label">
                    Name <span className="required">*</span>
                  </label>
                  <Input
                    size="large"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <Input
                    size="large"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone (Optional)</label>
                  <Input
                    size="large"
                    placeholder="+977-XXX-XXX-XXXX"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Subject <span className="required">*</span>
                  </label>
                  <Select
                    size="large"
                    placeholder="Select a subject"
                    value={formData.subject || undefined}
                    onChange={(value) => handleChange('subject', value)}
                    className="form-select"
                  >
                    {subjects.map((subject) => (
                      <Option key={subject} value={subject}>
                        {subject}
                      </Option>
                    ))}
                  </Select>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <TextArea
                    rows={6}
                    placeholder="Tell us more about your inquiry..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="form-textarea"
                  />
                </div>

                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  loading={loading}
                  className="submit-button"
                  block
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-info-wrapper">
              <h2 className="contact-section-title">Contact Information</h2>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="contact-icon">
                    <MailOutlined />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-detail-title">Email</h4>
                    <a href="mailto:hultprize@samriddhi.edu" className="contact-detail-text">
                      hultprize@samriddhi.edu
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <PhoneOutlined />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-detail-title">Phone</h4>
                    <a href="tel:+977XXXXXXXXX" className="contact-detail-text">
                      +977-XXX-XXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    <EnvironmentOutlined />
                  </div>
                  <div className="contact-details">
                    <h4 className="contact-detail-title">Address</h4>
                    <p className="contact-detail-text">
                      Samriddhi College<br />
                      Kathmandu, Nepal<br />
                      [Full Address Here]
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h3 className="social-title">Follow Us</h3>
                <div className="social-links">
                  <a
                    href="https://facebook.com/hultprizesamriddhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link facebook"
                  >
                    <FacebookFilled />
                  </a>
                  <a
                    href="https://instagram.com/hultprizesamriddhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link instagram"
                  >
                    <InstagramFilled />
                  </a>
                  <a
                    href="https://linkedin.com/company/hultprizesamriddhi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link linkedin"
                  >
                    <LinkedinFilled />
                  </a>
                  <a
                    href="https://twitter.com/hultprizesamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link twitter"
                  >
                    <TwitterOutlined />
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional - Add later if needed) */}
      <section className="map-section">
        <div className="container">
          <h2 className="map-title">Find Us</h2>
          <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1464676940967!2d85.37957831506215!3d27.676668782795677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a1bed1bdd29%3A0x70040fb78c745729!2sSamriddhi%20College!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '16px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;