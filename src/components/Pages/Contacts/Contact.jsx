import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [inputMessage, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = "service_u0aascr";
    const templateId = "template_ca6p36j";
    const publicKey = "fI7xMdeqouyo2LbGu";

    // Message object
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Noman Dipto",
      message: inputMessage,
    };

    // Send the email
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.log('Error sending email:', error);
      });
  };

  return (
    <div className="overflow-hidden bg-gray-50">
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto mt-16 mb-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <div className="mb-4">
          <label htmlFor="name" className="text-sm leading-7 text-gray-600">
            Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            name="name"
            placeholder="What's Your Name?"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="text-sm leading-7 text-gray-600">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="What's Your Email?"
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="text-sm leading-7 text-gray-600">
            Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            name="message"
            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          ></textarea>
        </div>
        <button className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
