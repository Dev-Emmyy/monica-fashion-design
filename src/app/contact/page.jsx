'use client';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const result = await emailjs.sendForm(
        'service_4po4n6b', // Replace with your service ID
        'template_ivc5zmq', // Replace with your template ID
        form.current,
        '2KbE1OKpP-zOBY0oj' // Replace with your user ID
      );

      if (result.status === 200) {
        setSuccessMessage('Message sent successfully!');
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
      console.error('Error sending email:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div class="bg-[url('/img/contact_bg.jpg')] bg-cover bg-center bg-no-repeat bg-center bg-local min-h-96 relative">
        <div class="flex flex-row justify-center items-center min-h-96">
          <p class="text-5xl text-center bg-[#FFFDD0] text-[#013220] p-4 font-serif">Contact Us</p>
        </div>
      </div>

      <div class="my-14 mx-12">
        <form ref={form} onSubmit={sendEmail}>
          <div class="mb-4">
            <label htmlFor="user_name" class="block text-[#013220] font-semibold">
              Full Name <a class="text-[#ff007f]">*</a>
            </label>
            <input
              type="text"
              name="user_name"
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
              name="user_email"
              class="border-solid border-2 border-black-500 rounded outline-none w-6/12 py-1 px-3 focus:border-rose-200 focus:border-4"
              required
            />
          </div>
          <div class="mb-4">
            <label htmlFor="message" class="block text-[#013220] font-semibold">
              How may we help you? <a class="text-[#ff007f]">*</a>
            </label>
            <textarea
              name="message"
              class="border-solid border-2 border-black-500 rounded outline-none w-6/12 h-60 py-1 px-3 focus:border-rose-200 focus:border-4"
              required
            />
          </div>

          {isLoading && <p class="text-center mb-4">Sending message...</p>}
          {error && <p class="text-center text-red-500 mb-4">{error}</p>}
          {successMessage && <p class="text-center text-green-500 mb-4">{successMessage}</p>}

          <input type="submit" value="Send" class="bg-[#013220] text-[#FFFDD0] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9]" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

