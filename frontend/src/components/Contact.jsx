import React from 'react'

const Contact = () => {
  return (
    <section className="py-8 scroll-m-12" id="contactus">
        <div className="bg-whity text-primary rounded-3xl shadow-2xl px-8 py-8 md:py-12">

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
                    <p className="font-light text-sm">Contact One: (+254) 700 000 897</p>
                    <p className="font-light text-sm">Contact Two: (+254) 700 000 897</p>
                </div>

                {/* Right */}
                <div className="px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                    <form method="post">
                        <div>
                            <label className="form-control w-full max-w-7xl py-2">
                                <div className="label">
                                    <span className="label-text text-primary">Name</span>
                                </div>
                                <input type="text" placeholder="You can call me..." className="input input-bordered w-full italic shadow-md text-primary text-sm bg-white" required />
                            </label>

                            <label className="form-control w-full max-w-7xl py-2">
                                <div className="label">
                                    <span className="label-text text-primary">Email</span>
                                </div>
                                <input type="email" placeholder="You can reach me at..." className="input input-bordered w-full italic shadow-md text-primary text-sm bg-white" required />
                            </label>

                            <label className="form-control w-full max-w-7xl py-2">
                                <div className="label">
                                    <span className="label-text text-primary">Message</span>
                                </div>
                                <textarea className="textarea textarea-bordered h-24 italic shadow-md text-primary text-sm bg-white" placeholder="I would like to say..." required></textarea>
                            </label>

                            <label className="form-control w-full max-w-7xl py-6">
                                <div className="text-white text-sm font-semibold text-end">
                                    <button value="submit" className="bg-primary focus:outline-none focus:ring focus:ring-cyan-300 py-3 px-6 rounded-3xl transition duration-200 transform hover:scale-110">Submit</button>
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