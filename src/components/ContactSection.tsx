import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { c } from 'node_modules/framer-motion/dist/types.d-Cjd591yU';

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [statusMsg, setStatusMsg] = useState('');

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current
      )
      .then(
        () => {
          setStatusMsg('✔️ Message sent!');
          formRef.current!.reset();
        },
        (err) => {
          console.error(err);
          console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
          console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
          console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
          setStatusMsg('❌ Oops—something went wrong.');
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative pt-20 -mt-20 max-w-3xl mx-auto mb-20"
    >
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4">
        Got a question or want to work together? Shoot me a message below.
      </p>

      <form ref={formRef} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          name="name"
          placeholder="Your name"
          required
          className="border p-2 rounded-lg"
        />
        <input
          name="email"
          type="email"
          placeholder="Your email"
          required
          className="border p-2 rounded-lg"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="border p-2 rounded-lg resize-none"
        />
        <button
          type="submit"
          className="bg-accent text-white rounded-lg py-2 px-4 hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>

      {statusMsg && <p className="mt-4 text-center text-lg">{statusMsg}</p>}
    </section>
  );
}
