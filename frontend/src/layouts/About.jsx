import React from 'react'
import audio1 from '../assets/audio/Israel_Mbonyi_-_Nitaamini(256k).mp3'

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
                        <p className="text-xs md:text-base text-primary italic">
                            Join us as we gather to celebrate the life and legacy of <span className="font-semibold">Yunuke Bosibori Nyambane</span>. With heavy hearts and cherished memories, 
                            we come together to pay our respects and bid farewell to a beloved mother, grand mother and a  friend. <br/><br/>
                            Together, we honor <span className="font-semibold">Yunuke Bosibori</span> enduring impact and the love that will forever remain in our hearts.
                            As we come together we humbly ask for your assistance in easing the financial burden that accompanies funeral 
                            arrangements and related expenses. Your contributions will directly support the family of during this difficult time, 
                            whether through a donation, a kind gesture, or simply by spreading the word, your support will make a meaningful difference. <br/><br/>
                            For those who wish to contribute via mobile payment, send your donation to: <br/>
                            MPESA ........... <br/>
                            MPESA ............ <br/><br/>
                            
                            Thank you for your generosity and for standing with us in solidarity during this time of mourning.</p>
                    </div>

                </div>
            </div>

            {/* Right */}
            <div className="bg-whity rounded-3xl px-6 py-4 shadow-2xl">
                <div className="py-8">
                    <div className="flex flex-col items-center pb-6">
                        <p className="font-Poppins text-primary mb-4 font-semibold text-lg">Israel Mbonyi - Nitaamini</p>
                        <audio controls className="rounded-3xl bg-primary">
                            <source src={audio1} type="audio/mp3" />
                        </audio>
                    </div>
                    <div className="max-w-screen-xl mx-auto border-t-4 lg:border-t-0 lg:border-l-4 border-primary py-6 px-8 rounded-3xl shadow-2xl">
                        <p className="text-xs md:text-base text-primary italic">
                            Sasa naapa Hakuna miungu ntaamini <br/>
                            Satajitia unajisi , Chakula cha ufalme <br/>
                            Na Sitauza urithi wa wokovu, anasa za Kisasa <br/>
                            NiNa uhakika waweza , waweza kuniponya, <br/>
                            Hata usipo niponya Sitaabudu Masanamu <br/><br/>

                            Naelewa maji na moto nitapita, Kwenye uvuli wa mauti <br/>
                            Nina wewe sitaogopa kamwe <br/>
                            Mungu wangu wanishika mkono, Wautuliza moyo wangu, <br/>
                            Si na mashaka wanibeba mgongoni <br/><br/>

                            Waweza tuma neno la uzima, libadishe yote <br/>
                            Hata usiyafanye hayo yoote <br/>
                            Bado nitaamini <br/><br/>

                            Si Mara y'a kwanza kunitowa katika magumu <br/>
                            Ni na ushuhuda zaidi ya moja, We ni mwaminifu <br/>
                            Ni na historia maalum, We ni chemchemi ya uzima. <br/><br/>

                            Nitaamini, bado nitaamini <br/>
                            Ukiniponya nitaamini, Hata usiniponye bado nitaamini <br/>
                            Ukinijibu nitaamini , Hata usinijibu bado nitaamini <br/>
                            Ukibadilisha nitaamini , Hata usibadilishe bado nitaamini <br/>
                            Kwenye uvuli wa mauti bado nitaamini <br/>
                            Nina ushuhuda, wewe ni mwaminifu <br/>
                        </p>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}

export default About