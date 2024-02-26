import React from 'react'

const Messages = () => {
  return (
    <section className="py-12 scroll-m-12" id="messages">
        <div className="text-center text-primary text-2xl font-semibold py-4">
            <h3>Messages of Condolence</h3>
        </div>

        <div className="py-4 grid lg:grid-cols-5 gap-8">
            {/* Left */}
            <div className="lg:col-span-2 bg-primary text-white flex flex-col justify-center px-4 sm:px-16 py-8 rounded-3xl shadow-2xl">
                <div className="font-semibold py-2">
                    <h6 className="text-sm">SHARE, SUPPORT</h6>
                    <h3 className="text-2xl">WITH A MESSAGE</h3>
                </div>

                <form method="post">
                    <div>
                        <label className="form-control w-full py-2">
                            <div className="label">
                                <span className="label-text text-white">Name</span>
                            </div>
                            <input type="text" placeholder="You can call me..." className="input input-bordered w-full italic shadow-md text-primary text-sm bg-white" required />
                        </label>

                        <label className="form-control w-full py-2">
                            <div className="label">
                                <span className="label-text text-white">Message</span>
                            </div>
                            <textarea className="textarea textarea-bordered h-24 italic shadow-md text-primary text-sm bg-white" placeholder="I would like to say..." required></textarea>
                        </label>

                        <label className="form-control w-full py-6">
                            <div className="text-primary font-semibold text-end">
                                <button value="submit" type="submit" className="bg-white focus:outline-none focus:ring focus:ring-cyan-300 py-2 px-4 rounded-3xl transition duration-200 transform hover:scale-110">Send Message</button>
                            </div>
                        </label>

                    </div>
                </form>
            </div>

            {/* Right */}
            <div className="lg:col-span-3">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-secondary text-primary py-4 px-8 rounded-3xl ">
                        <div className="flex flex-row justify-between pt-8">
                            <h6 className="font-semibold">Mary Moraa</h6>
                            <span className="text-5xl">&quot;</span>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <p className="text-sm italic">The sensitivity and professionalism shown by Poet Funeral Ceremony made a difficult time a little easier to bear</p>
                            <span className="text-5xl">&quot;</span>
                        </div>
                    </div>

                    <div className="bg-secondary text-primary py-4 px-8 rounded-3xl ">
                        <div className="flex flex-row justify-between pt-8">
                            <h6 className="font-semibold">Mary Moraa</h6>
                            <span className="text-5xl">&quot;</span>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <p className="text-sm italic">The sensitivity and professionalism shown by Poet Funeral Ceremony made a difficult time a little easier to bear</p>
                            <span className="text-5xl">&quot;</span>
                        </div>
                    </div>

                    <div className="bg-secondary text-primary py-4 px-8 rounded-3xl ">
                        <div className="flex flex-row justify-between pt-8">
                            <h6 className="font-semibold">Mary Moraa</h6>
                            <span className="text-5xl">&quot;</span>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <p className="text-sm italic">The sensitivity and professionalism shown by Poet Funeral Ceremony made a difficult time a little easier to bear</p>
                            <span className="text-5xl">&quot;</span>
                        </div>
                    </div>

                    <div className="bg-secondary text-primary py-4 px-8 rounded-3xl ">
                        <div className="flex flex-row justify-between pt-8">
                            <h6 className="font-semibold">Mary Moraa</h6>
                            <span className="text-5xl">&quot;</span>
                        </div>
                        <div className="flex flex-col space-y-8">
                            <p className="text-sm italic">The sensitivity and professionalism shown by Poet Funeral Ceremony made a difficult time a little easier to bear</p>
                            <span className="text-5xl">&quot;</span>
                        </div>
                    </div>

                </div>

                <div className="text-white font-semibold text-sm text-center py-4">
                    <button value="submit" type="submit" className="bg-primary focus:outline-none focus:ring focus:ring-cyan-300 py-3 px-6 rounded-3xl transition duration-200 transform hover:scale-110">Load More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Messages