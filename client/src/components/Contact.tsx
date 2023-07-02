import { useRef, useState, FormEvent, useEffect } from 'react'
import emailjs from '@emailjs/browser';
import '../scss/contact.scss'
function Contact() {
    const [state, setState] = useState({ name: '', email: '', message: '' })
    const fref = useRef<HTMLFormElement>(null);
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: value }));
      };
    
      const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const parent = e.target.parentNode as HTMLElement;
        parent.classList.add('focused');
      };
    
      const handleInputBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        const parent = e.target.parentNode as HTMLElement;
        if (value === '') {
          parent.classList.remove('focused');
        }
      };
    
      useEffect(() => {
        const form = fref.current;
        if (form) {
          form.addEventListener('blur', handleInputBlur, true);
        }
        return () => {
          if (form) {
            form.removeEventListener('blur', handleInputBlur, true);
          }
        };
      }, []);
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!fref.current) return
        console.log(fref.current)
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE, import.meta.env.VITE_EMAILJS_TEMPLATE, fref.current, import.meta.env.VITE_EMAILJS_KEY)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="c-wr" id="contact">
            <div id="form-container">
                <form className="form" ref={fref} id="contact-form" onSubmit={sendEmail}>
                    <h2>Contact me</h2>
                    <div className="textfield">
                        <label htmlFor="from_name" className={state.name !== '' ? 'focused' : ''}>
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            value={state.name}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="textfield">
                        <label htmlFor="from_email" className={state.email !== '' ? 'focused' : ''}>
                            Email
                        </label>
                        <input
                            required
                            autoComplete="email"
                            type="email"
                            name="email"
                            value={state.email}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="text-area">
                        <label htmlFor="message" className={state.message !== '' ? 'focused' : ''}>
                            Message
                        </label>
                        <textarea
                            required
                            name="message"
                            value={state.message}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            cols={30}
                            rows={5}
                            maxLength={500}
                        />
                    </div>
                    <button type="submit" className="btn-submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact