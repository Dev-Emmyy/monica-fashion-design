'use client';
import { useState } from 'react';
import { SMTPClient } from 'emailjs';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Initialize the SMTP client with your SMTP server details
        const client = new SMTPClient({
            user: 'user',
            password: 'password',
            host: 'smtp.your-email.com',
            ssl: true,
        });

        // Construct the email message
        const message = {
            text: formData.message,
            from: `${formData.name} <${formData.email}>`,
            to: 'emmanuelugochukwu2000@gmail.com', // Specify your recipient's email address
            subject: 'Contact Form Submission'
        };

        // Send the email
        client.send(message, (err, response) => {
            if (err) {
                console.error('Error sending email:', err);
            } else {
                console.log('Email sent successfully:', response);
                // Optionally, reset the form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            }
        });
    };

  return (
    <div>
      <div class="bg-[url('/img/contact_bg.jpg')] bg-cover bg-center bg-no-repeat bg-center bg-local min-h-96 relative">
        <div class="flex flex-row justify-center items-center min-h-96">
          <p class="text-5xl text-center bg-[#FFFDD0] text-[#013220] p-4 font-serif">Contact Us</p>
        </div>
      </div>

      <div class="my-14 mx-12">
        <form onSubmit={handleSubmit}>
          <div class="mb-4">
            <label htmlFor="user_name" class="block text-[#013220] font-semibold">
              Full Name <a class="text-[#ff007f]">*</a>
            </label>
            <input
              type="text"
              id="name"
              name="name" 
              value={formData.name} 
              onChange={handleChange}
              class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
              required
            />
          </div>
          <div class="mb-4">
            <label htmlFor="user_email" class="block text-[#013220] font-semibold">
              Email Address <a class="text-[#ff007f]">*</a>
            </label>
            <input
              type="email"
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange}
              class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
              required
            />
          </div>
          <div class="mb-4">
            <label htmlFor="message" class="block text-[#013220] font-semibold">
              How may we help you? <a class="text-[#ff007f]">*</a>
            </label>
            <textarea
             id="message" 
             name="message" 
             value={formData.message} 
             onChange={handleChange}
              class="border-solid border-2 border-black-500 rounded outline-none w-6/12 h-60 py-1 px-3 focus:border-rose-200 focus:border-4"
              required
            />
          </div>
          <input type="submit" value="Send" class="bg-[#013220] text-[#FFFDD0] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9]" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

