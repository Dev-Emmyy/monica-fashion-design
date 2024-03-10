'use client';
import React from 'react';

const Contact = () => {

  return (
    <div>
      <div class="bg-[url('/img/contact_bg.jpg')] bg-cover bg-center bg-no-repeat bg-center bg-local min-h-96 relative">
        <div class="flex flex-row justify-center items-center min-h-96">
          <p class="text-5xl text-center bg-[#FFFDD0] text-[#013220] p-4 font-serif">Contact Us</p>
        </div>
      </div>

      <div class="my-14 mx-12">
        <form id="fs-frm" name="simple-contact-form" acceptCharset="utf-8" action="https://formspree.io/f/xrgnlayp" method="post">
        <fieldset id="fs-frm-inputs">
          <div class="mb-4">
            <label htmlFor="user_name" class="block text-[#013220] font-semibold">
              Full Name <a class="text-[#ff007f]">*</a>
            </label>
            <input
              type="text"
              id="name"
              name="name" 
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
              name="_replyto" 
              id="email-address"
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
              class="border-solid border-2 border-black-500 rounded outline-none w-6/12 h-60 py-1 px-3 focus:border-rose-200 focus:border-4"
              required
            />
          </div>
          <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission" />
          </fieldset>
          <input type="submit" value="Send" class="bg-[#013220] text-[#FFFDD0] px-6 py-2 transition-all duration-300 border hover:text-black hover:border-black hover:bg-[#f9f9f9] hover:cursor-pointer" />
        </form>
      </div>
    </div>
  );
};

export default Contact;

