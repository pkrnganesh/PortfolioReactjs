import  { useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import styles from './ContactStyles.module.css';

function Contact() {
  const form = useRef();

  useEffect(() => {
    const handleSubmit = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_f4orszv', 'template_eetjtf8', form.current, 'gwojbYC1c3rc6by3s')
        .then(() => {
          alert('Your message has been sent successfully. I will get back to you soon.');
          form.current.reset();
        }, (error) => {
          console.error('FAILED...', error);
          alert('Failed to send your message. Please try again later.');
        });
    };

    const formElement = form.current;
    formElement.addEventListener('submit', handleSubmit);

    return () => {
      formElement.removeEventListener('submit', handleSubmit);
    };
  }, []);

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form id="contactForm" ref={form}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;