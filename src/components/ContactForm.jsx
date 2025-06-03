import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        access_key: process.env.REACT_APP_ACCESS_KEY
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify(formData)
        });
        const data = await response.json();

        setFormData((prev) => ({ ...prev, name: '', email: '', message: '' }));

        if (data.success) {
            toast.success('Email sent successfully', {
                style: { backgroundColor: '#32de84', color: '#fff' }
            });
        } else {
            console.log("Unsuccessful in sending the email")
            toast.error('Sorry, failed to send your email', {
                style: { backgroundColor: '#E32636', color: '#fff' }
            });
        }
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Get in Touch</h2>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
        </form>
    );
}