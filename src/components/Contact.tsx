import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_your_service_id', // Replace with your EmailJS service ID
        'template_your_template_id', // Replace with your EmailJS template ID
        form.current,
        'your_public_key' // Replace with your EmailJS public key
      );
      toast.success('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <Toaster position="top-right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-900 dark:focus:border-gray-400 focus:ring-gray-900 dark:focus:ring-gray-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-900 dark:focus:border-gray-400 focus:ring-gray-900 dark:focus:ring-gray-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-gray-900 dark:focus:border-gray-400 focus:ring-gray-900 dark:focus:ring-gray-400 transition-colors"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 py-3 px-6 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">samirmode763@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Phone className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">NA</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-gray-900 dark:text-white" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;