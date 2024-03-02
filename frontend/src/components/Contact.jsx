import React, { useState } from 'react'

const Contact = () => {

    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted
        const fullNameValue = event.target.elements.fullName.value;
        const messageValue = event.target.elements.message.value;
        const emailValue = event.target.elements.email.value;

        fetch(import.meta.env.VITE_API_CONTACT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name: fullNameValue,
                email: emailValue,
                message: messageValue,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    // Assuming the presence of an 'id' property indicates a successful submission
                    setSuccessMessage('Message submitted successfully');
                    setFullName('');
                    setEmail('');
                    setMessage('');
                    setTimeout(() => {
                        setSuccessMessage('');
                    }, 4000); // 4 seconds
                } else {
                    // Handle error, e.g., show an error message
                    setSuccessMessage('Failed to submit message');
                }
            })
            .catch(error => {
                console.error('Error submitting comment:', error);
                setSuccessMessage('An error occurred while submitting the comment');
                setFullName('');
                setEmail('');
                setMessage('');
            })
            .finally(() => {
                setLoading(false); // Set loading back to false after the submission process is complete
            });
    };

    const handleWhatsAppClick = () => {
        // Replace `1234567890` with your actual WhatsApp number
        const whatsappUrl = 'https://wa.me/254798622935';

        // Open the share dialog
        window.open(whatsappUrl, '_blank');
    };

  return (
    <section className="py-8 scroll-m-12" id="contactus">
        <div className="bg-whity text-primary rounded-3xl shadow-2xl px-8 py-8 md:py-12">

            {successMessage &&
                <div className="toast toast-bottom toast-end text-sm font-semibold italic z-50">
                    <div className="alert alert-info">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <span>You have a new Notification</span>
                    </div>
                    <div className="alert alert-success text-whity">
                    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>{successMessage}</span>
                    </div>
                </div>
            }

            {/* Top */}
            <div className="max-w-xl mx-auto text-center py-4">
                <h4 className="font-semibold text-4xl">Get In Touch</h4>
                <p className="py-2 font-light">
                    We are available to offer our support and respond 
                    to inquiries that you may have.
                </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
                {/* Left */}
                <div className="flex flex-col justify-center px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                    <h5 className="font-semibold text-2xl text-center">Reach Out to Us</h5>
                    <p className="py-4 font-light text-sm text-justify">
                        Looking for something specific? See below for contacts 
                        related to your inquiry. If you don’t find what you need, 
                        fill out our contact form.
                    </p>
                    <p className="py-2 text-primary font-semibold text-sm">GENERAL INQUIRIES</p>
                    <p className="font-light text-sm">STELLA NYAMBANE: <button onClick={handleWhatsAppClick} className='text-primary font-semibold'>0798622935</button></p>
                </div>

                {/* Right */}
                <div className="px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="form-control w-full max-w-7xl py-2">
                                <div className="label">
                                    <span className="label-text text-primary">Name</span>
                                </div>
                                <input type="text" name="fullName" placeholder="You can call me..." className="input input-bordered w-full italic shadow-md text-primary text-sm bg-white" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            </label>

                            <label className="form-control w-full max-w-7xl py-2">
                                <div className="label">
                                    <span className="label-text text-primary">Email</span>
                                </div>
                                <input type="email" name="email" placeholder="You can reach me at..." className="input input-bordered w-full italic shadow-md text-primary text-sm bg-white" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </label>

                            <label className="form-control w-full max-w-7xl py-2">
                                <div className="label">
                                    <span className="label-text text-primary">Message</span>
                                </div>
                                <textarea name="message" className="textarea textarea-bordered h-24 italic shadow-md text-primary text-sm bg-white" placeholder="I would like to say..." required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                            </label>

                            {loading && <p className='text-xs italic '>Sending Message...</p>}
                            <label className="form-control w-full max-w-7xl py-6">
                                <div className="text-white text-sm font-semibold text-end">
                                    <button type='submit' value="submit" className="bg-primary focus:outline-none focus:ring focus:ring-cyan-300 py-3 px-6 rounded-3xl transition duration-200 transform hover:scale-110">Submit</button>
                                </div>
                            </label>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact