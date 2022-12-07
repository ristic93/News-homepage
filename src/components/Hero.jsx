import React from 'react'
import heroImg from "../assets/image-web-3-desktop.jpg"

const Hero = () => {
    return (
        <header className='my-10 gap-10 flex flex-col sm:flex-row'>
            <div>
                <div>
                    <img src={heroImg} alt="hero" className="h-[350px] w-[100%] object-cover" />
                </div>
                <div className='gap-5 py-10 flex flex-col sm:flex-row'>
                    <div>
                        <h1 className='text-5xl font-black sm:text-6xl'>The Bright Future Of <br/> Web 3.0?</h1>
                    </div>
                    <div>
                        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                        <button className='mt-10 py-3 px-10 bg-softRed uppercase tracking-[5px] text-offWhite hover:bg-veryDarkBlue'>Read more</button>
                    </div>
                </div>
            </div>
            <div className='bg-veryDarkBlue p-10'>
                <h2 className='text-5xl font-black text-softOrange'>New</h2>
                <div>
                    <h4 className='text-2xl font-black text-offWhite mt-10 cursor-pointer hover:text-softOrange'>Hydrogen VS Electric cars</h4>
                    <p className='text-offWhite opacity-60 mt-3'>Will hydrogen-fueled cars ever catch up to EVs?</p>
                    <hr className='my-5'/>
                </div>
                <div>
                    <h4 className='text-2xl font-black text-offWhite mt-10 cursor-pointer hover:text-softOrange'>The downsides of AI Artistry</h4>
                    <p className='text-offWhite opacity-60 mt-3'>What are the possible adverse effects of on-demand AI image generation</p>
                    <hr className='my-5'/>
                </div>
                <div>
                    <h4 className='text-2xl font-black text-offWhite mt-10 cursor-pointer hover:text-softOrange'>Is VC Funding Drying Up</h4>
                    <p className='text-white opacity-60 mt-3 mb-3'>Private funding by VC firms is 50% YOY. We take a lot a look at what that means.</p>
                </div>
            </div>
        </header>
    )
}

export default Hero