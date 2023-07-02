import { useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser';
import '../scss/contact.scss'
function Contact() {
    const [state, setState] = useState({ from_name: '', from_email: '', message: '' })
    const fref = useRef<HTMLFormElement>(null);
    const btnref = useRef<HTMLButtonElement>(null);
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

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (!fref.current || !btnref.current) return
        let button = btnref.current as HTMLButtonElement
        button.innerHTML = 'Sending ...'
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE as string, import.meta.env.VITE_EMAILJS_TEMPLATE as string, fref.current, import.meta.env.VITE_EMAILJS_KEY as string)
            .then((result) => {
                button.innerHTML = 'Email Sent!'
                setState(prevState => ({ ...prevState, from_name: '', from_email: '', message: '' }));
                console.log(result.text);
            },
             (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="c-wr" id="contact">
            <div id="form-container">
                <form className="form" ref={fref} id="contact-form" onSubmit={sendEmail}>
                    <h2>Contact me</h2>
                    <div className="textfield">
                        <label htmlFor="from_name" className={state.from_name !== '' ? 'focused' : ''}>
                            Name
                        </label>
                        <input
                            required
                            type="text"
                            name="from_name"
                            value={state.from_name}
                            onChange={handleInputChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                        />
                    </div>
                    <div className="textfield">
                        <label htmlFor="from_email" className={state.from_email !== '' ? 'focused' : ''}>
                            Email
                        </label>
                        <input
                            required
                            autoComplete="email"
                            type="email"
                            name="from_email"
                            value={state.from_email}
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
                    <button ref={btnref} type="submit" className="btn-submit" >
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact