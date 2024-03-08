import React from 'react'
import ReactPlayer from 'react-player/youtube';

import audio1 from '../assets/audio/maisha.mp3'

const About = () => {
  return (
    <section>
        <div className="py-8 grid lg:grid-cols-2 gap-4">
            {/* Left */}
            <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                <div className="py-8">
                    <div className="text-center text-primary text-xl font-semibold pb-6">
                        <h3>With</h3>
                        <h3>Heartfelt Gratitude and Love</h3>
                    </div>
                    <div className="max-w-screen-xl mx-auto border-t-4 lg:border-t-0 lg:border-l-4 border-primary py-6 px-8 rounded-3xl shadow-2xl">
                        <p className="text-sm md:text-base text-primary">
                              Together, we honor <span className="font-semibold">Yunuke Bosibori</span> enduring impact and the love that will forever remain in our hearts. <br /><br />

                              {/* <span className='italic text-primary'>(Burial arrangements will be updated soon.)</span> <br /><br /> */}
                              <span className="font-semibold">Birth</span> <br />  The late Mama Yunuke Bosibori Nyambane was born at Bokiambari Rengenyo Village in the Bosibori Nyambane the daughter to the late Reuben Omae and Rebeee year 1933 she wayakeri,
                              Moraa, Charles, late EDUE late Nyamwaro, Late She was sister to Nyakeri Me Kingara.<br /><br />
                              <span className="font-semibold">Education</span><br />  She went to Tonga Primary school.<br /><br />
                              <span className="font-semibold">Marriage</span><br />  The late mama Yunuke was married to the late Robinson Nyambane in the year 1953 through a church wedding at Tonga Adventist Church and they were blessed with 13 children namely, The late Charles Onduso, Joyce Kerubo, Samuel Omenta, Moses Kengara, Fred Oribo, Benard Ongaga, Florence Moige, Peter Nyanumba, James Mboga, Duke Morara, Joseph Ombogo, Cyrus Kebaso and Stella Omboto.<br /><br />
                              <span className="font-semibold">Christian Life</span><br />  Mama Yunuke was a strong Adventist Christian in all her life.<br /><br />
                              <span className="font-semibold">Occupation</span><br />  She was an active Tea farmer She also grew Pyrethrum and other food crops.<br /><br />
                              <span className="font-semibold">Sickness</span><br />  The late mama Yunuke enjoyed good health until the year 2019 when was diagnosed with a hearth condition. She was under care of a Cuban Doctor (Cardiologist) at Nyamira referral Hospital. On 17th February she fell ill and was rushed to Christa Marianne Hospital where she was admitted Her condition worsened and on the 22nd at 6:00 pm she died of heart failure at the age of 91 yrs. She has left behind 9 sons, 3 daughters, 40 grand children and 20 great grand children. Rest easy till we meet again. May her Soul Rest In Peace.<br /><br />
                          
                            
                              We are profoundly touched by the outpouring of love, support, and generosity that has enveloped us during this difficult time. Your contributions, whether in the form of kind words, heartfelt gestures, or financial assistance, have lifted our spirits and provided immense comfort as we navigate the journey. <br /><br />
                              Words cannot express the depth of gratitude we feel for each and every one of you who has offered your unwavering support. Your presence, both physically and in spirit, has been a beacon of strength, guiding us through the darkest moments of grief. <br /><br />

                              From the bottom of our hearts, we extend our deepest thanks and appreciation for your boundless love and support. <br /><br />
                              With heartfelt gratitude and love, <br /><br />
                              
                              <span className='font-semibold italic text-primary'>Nyambane Family</span>
                        </p>
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

                            Bwana naomba nifungulie fahamu zangu ili niweze hesabu siku zangu nilalapo nilale na matumaini .... <br />
                            kuja kwako Kama siku zangu hazijafika naomba niwe miongoni mwaooo watakaokulaki Kule mbinguni...×2 <br /><br />

                            ................. <br /><br />

                            Hapa si (hapa sio kwetu...) tu wasafiri na yote yanapita... <br />
                            Tafuta ufalme wa mbingu Maisha ya milele.. upate nafasii ×2 <br /><br />

                            Machozi tutapanguzwa kwa furaha na wapendwa wetu..×2 <br /><br />


                            Bwana naomba nifungulie fahamu zangu ili niweze hesabu siku zangu nilalapo nilale na matumaini .... <br />
                            kuja kwako Kama siku zangu hazijafika naomba niwe miongoni mwaooo watakaokulaki Kule mbinguni...×2 <br /><br />

                            <a href='https://www.youtube.com/watch?v=Se3rJX9Y29w' target='Rock of Ages Youtube Video' className='text-xs text-primary font-semibold italic text-end'>Maisha ya Dunia - Rock of Ages Ministers</a>
                        </p>
                    </div>

                    <div className="flex flex-col items-center py-6">
                        <a href='https://www.youtube.com/watch?v=HlXxjX2Zv_o' target='Robkam Media Production' className="font-Poppins text-primary mb-4 font-semibold text-sm md:text-lg">Home Arrival - March 6, 2024</a>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=HlXxjX2Zv_o"
                            width="350px"
                            height="300px"
                            title="Burial Ceremony"
                            controls
                        />
                    </div>

                    <div className="flex flex-col items-center py-6">
                        <a href='https://www.youtube.com/watch?v=5v3UIX-zCMw' target='Conquerland Media Group Center' className="font-Poppins text-primary mb-4 font-semibold text-sm md:text-lg">Burial Ceremony - March 7, 2024</a>
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=5v3UIX-zCMw"
                            width="350px"
                            height="300px"
                            title="Burial Ceremony"
                            controls
                        />
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default About
