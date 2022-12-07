import React from 'react';
import img1 from '../assets/image-retro-pcs.jpg';
import img2 from '../assets/image-top-laptops.jpg';
import img3 from '../assets/image-gaming-growth.jpg';


const Info = () => {
    return (
        <div className='mt-[60px] sm:flex sm:gap-6 sm:mt-[100px]'>
            <div className='flex gap-6 h-[150px] mb-[30px] sm:h-[200px] sm:basis-1/3 sm:mb-0'>
                <div>
                    <img className='h-[100%] w-[200px]' src={img1} alt="info" />
                </div>
                <div>
                    <h2 className='font-[700] text-4xl text-grayishBlue sm:text-5xl'>01</h2>
                    <p className='font-[800] text-2xl capitalize my-2 hover:text-softRed cursor-pointer transition'>Reviving retro PCs</p>
                    <p className='opacity-80 text-sm'>What happens when old PCs <br /> are given modern upgrades?</p>
                </div>
            </div> 

            <div className='flex gap-6 h-[150px] mb-[30px] sm:h-[200px] sm:basis-1/3 sm:mb-0'>
                <div>
                    <img className='h-[100%] w-[200px]' src={img2} alt="info" />
                </div>
                <div>
                    <h2 className='font-[700] text-4xl text-grayishBlue sm:text-5xl'>02</h2>
                    <p className='font-[800] text-2xl capitalize my-2 hover:text-softRed cursor-pointer transition'>Top 10 Laptops of 2022</p>
                    <p className='opacity-80 text-sm'>Our best picks for various <br /> needs and budgets.</p>
                </div>
            </div> 

            <div className='flex gap-6 h-[150px] sm:h-[200px] sm:basis-1/3'>
                <div>
                    <img className='h-[100%] w-[200px]' src={img3} alt="info" />
                </div>
                <div>
                    <h2 className='font-[700] text-4xl text-grayishBlue sm:text-5xl'>03</h2>
                    <p className='font-[800] text-2xl capitalize my-2 hover:text-softRed cursor-pointer transition'>The Growth of Gaming</p>
                    <p className='opacity-80 text-sm'>How the pandemic has <br /> sparked fresh opportunities.</p>
                </div>
            </div> 

    </div>
    )
}

export default Info;