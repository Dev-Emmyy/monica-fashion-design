'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


 const Contact = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
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
        emailjs.sendForm('service_4po4n6b', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
            }, (error) => {
                console.error('Error sending message:', error.text);
                alert('Failed to send message');
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
            <form onSubmit={handleSubmit} class="">
            <div class="mb-4">
                <label htmlFor="firstName" class="block text-[#013220] font-semibold">First Name <a class="text-[#ff007f]">*</a></label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
                />
            </div>
            <div class="mb-4">
                <label htmlFor="lastName" class="block text-[#013220] font-semibold">Last Name <a class="text-[#ff007f]">*</a></label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
                />
            </div>
            <div class="mb-4">
                <label htmlFor="email" class="block text-[#013220] font-semibold">Email Address <a class="text-[#ff007f]">*</a></label>
                <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
                />
            </div>
            <div class="mb-4">
            <label htmlFor="phone" class="block text-[#013220] font-semibold">Phone Number</label>
            <input
                type="tel"
                id="phone"
                name="phone"
                onChange={handleChange}
                value={formData.phone}
                required
                class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
            />
            </div>
            <div class="mb-4">
                <label htmlFor="message" class="block text-[#013220] font-semibold">How may we help you? <a class="text-[#ff007f]">*</a></label>
                <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                class="border-solid border-2 border-black-500 rounded outline-none w-6/12 h-60 py-1 px-3 focus:border-rose-200 focus:border-4"
                />
            </div>
            <button type="submit" class="bg-[#013220] text-[#FFFDD0] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9]">Send Us</button>
            </form>
        </div>

        </div>
    )
 }

 export default Contact;