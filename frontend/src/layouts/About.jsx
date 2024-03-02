import React from 'react'

import audio1 from '../assets/audio/maisha.mp3'

const About = () => {
  return (
    <section>
        <div className="py-8 grid lg:grid-cols-2 gap-4">
            {/* Left */}
            <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                <div className="py-8">
                    <div className="text-center text-primary text-xl font-semibold pb-6">
                        <h3>Honoring Memories</h3>
                        <h3>In Loving Memories</h3>
                    </div>
                    <div className="max-w-screen-xl mx-auto border-t-4 lg:border-t-0 lg:border-l-4 border-primary py-6 px-8 rounded-3xl shadow-2xl">
                        <p className="text-sm md:text-base text-primary">
                            Join us as we gather to celebrate the life and legacy of <span className="font-semibold">Yunuke Bosibori Nyambane</span>. With heavy hearts and cherished memories, 
                            we come together to pay our respects and bid farewell to a beloved mother, grand mother and a  friend. <br/><br/>
                            Together, we honor <span className="font-semibold">Yunuke Bosibori</span> enduring impact and the love that will forever remain in our hearts. <br /><br />
                            As we come together we humbly ask for your assistance in easing the financial burden that accompanies funeral 
                            arrangements and related expenses. Your contributions will directly support the family of during this difficult time, 
                            whether through a donation, a kind gesture, or simply by spreading the word, your support will make a meaningful difference. <br/><br/>
                            For those who wish to contribute kindly contact: <br/>
                            STELLA NYAMBANE: 0798622935 <br/><br/> 

                            {/* <span className='italic text-primary'>(Burial arrangements will be updated soon.)</span> <br /><br /> */}
                            
                            Thank you for your generosity and for standing with us during this time of mourning.</p>
                    </div>

                </div>
            </div>

            {/* Right */}
            <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                <div className="py-8">
                    <div className="flex flex-col items-center pb-6">
                        <a href='https://www.youtube.com/watch?v=Se3rJX9Y29w' target='Rock of Ages Youtube Video' className="font-Poppins text-primary mb-4 font-semibold text-sm md:text-lg">Rock of Ages Ministers - Maisha ya Dunia</a>
                        <audio controls className="rounded-3xl bg-primary">
                            <source src={audio1} type="audio/mp3" />
                        </audio>
                    </div>
                    <div className="max-w-screen-xl mx-auto border-t-4 lg:border-t-0 lg:border-l-4 border-primary py-6 px-8 rounded-3xl shadow-2xl">
                        <p className="text-sm md:text-base text-primary">
                            Maisha ya dunia hii yapita upesi Kama upepo <br />
                            Ni ya masumbuko na huzuni tele mwisho uwe mavumbini Tulale tena...×2 <br /><br />

                            "Bwana naomba nifungulie fahamu zangu ili niweze hesabu siku zangu nilalapo nilale na matumaini .... <br />
                            kuja kwako Kama siku zangu hazijafika naomba niwe miongoni mwaooo watakaokulaki Kule mbinguni..."×2 <br /><br />

                            ................. <br /><br />

                            Hapa si(hapa sio kwetu...) tu wasafiri na yote yanapita... <br />
                            Tafuta ufalme wa mbingu Maisha ya milele.. upate nafasii ×2 <br /><br />

                            Machozi tutapanguzwa kwa furaha pamoja na wapendwa wetu..×2 <br /><br />


                            "Bwana nifungulie fahamu zangu ili niweze hesabu siku zangu nilalapo nilale na matumaini .... <br />
                            kuja kwako Kama siku zangu hazijafika naomba niwe miongoni mwaooo watakaokulaki Kule mbinguni..."×2 <br /><br />

                            <a href='https://www.youtube.com/watch?v=Se3rJX9Y29w' target='Rock of Ages Youtube Video' className='text-xs text-primary font-semibold italic text-end'>Maisha ya Dunia - Rock of Ages Ministers</a>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default About
