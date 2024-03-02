import React, { useState } from 'react'

import Condolence from './Condolence'

const Messages = () => {

    const [fullName, setFullName] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading to true when the form is submitted
        const fullNameValue = event.target.elements.fullName.value;
        const messageValue = event.target.elements.message.value;

        fetch('https://backend-momanyi.onrender.com/farewell/api/condolence/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                full_name: fullNameValue,
                message: messageValue,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.id) {
                    // Assuming the presence of an 'id' property indicates a successful submission
                    setSuccessMessage('Message submitted successfully.');
                    setFullName('');
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
                setSuccessMessage('An error occurred while submitting the message');
                setFullName('');
                setMessage('');
            })
            .finally(() => {
                setLoading(false); // Set loading back to false after the submission process is complete
            });
    };

  return (
    <section className="py-12 scroll-m-12" id="messages">
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

        <div className="text-center text-primary text-2xl font-semibold py-4">
            <h3>Messages of Condolence</h3>
        </div>

        <div className="py-4 grid lg:grid-cols-5 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 bg-primary text-white flex flex-col justify-start px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                <div className="font-semibold py-2">
                    <h6 className="text-sm">Let's extend our heartfelt support</h6>
                    <h3 className="text-2xl">WITH A MESSAGE</h3>
                    <h6 className="text-sm">of love and reflections, serving as a beacon of strength and comfort.</h6>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="form-control w-full py-2">
                            <div className="label">
                                <span className="label-text text-white">Name</span>
                            </div>
                            <input type="text" name="fullName" placeholder="You can call me..." className="input input-bordered w-full italic shadow-md text-primary text-sm bg-white" required value={fullName} onChange={(e) => setFullName(e.target.value)} />
                        </label>

                        <label className="form-control w-full py-2">
                            <div className="label">
                                <span className="label-text text-white">Message</span>
                            </div>
                            <textarea name="message" className="textarea textarea-bordered h-24 italic shadow-md text-primary text-sm bg-white" placeholder="I would like to say..." required value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                        </label>

                        {loading && <p className='text-xs italic '>Sending Message...</p>}
                        <label className="form-control w-full py-6">
                            <div className="text-primary font-semibold text-end">
                                <button value="submit" type="submit" className="bg-white focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-3xl transition duration-200 transform hover:scale-110">Send Message</button>
                            </div>
                        </label>

                    </div>
                </form>
            </div>

            {/* Right */}
            < Condolence />
        </div>
    </section>
  )
}

export default Messages