// import React from 'react'
import IMAGES from "../../images/images"

const Home = () => {
    
    return(
        <div className="max-w-screen">
            <div className="space-x-[8rem] flex flex-row justify-center items-center mt-16 max-w-screen h-[36rem]">
                <div className="w-[42rem] h-[24rem]">
                    {/* navigate your way */}
                    <div className="w-full h-24 flex items-end">
                        <label className="text-5xl">Navigate your way</label>
                    </div>
                     {/* Lakbay Cavite */}
                    <div className="w-full h-24 flex items-center">
                        <label className="text-3xl font-bold text-primary ">Lakbay Cavite</label>
                    </div>
                     {/* Paragrapgh Line */}
                    <div className="w-full h-24  flex items-start text-sm">
                        <p>Navigate Your Way with Ease – Access Public Transportation Routes and Real-Time Updates. Connect with a Community to Share Tips and Guides for Exploring the City.</p>
                    </div>
                     {/* Div Button */}
                    <div className="w-full h-24  flex flex-row p-4 space-x-12 justify-center">
                        <div className="w-60 h-full rounded-box">
                            <img className='w-60 h-full rounded-box object-fill' src={IMAGES.dlAndroid} alt='download android image'/>
                        </div>
                        <div className="w-60 h-full rounded-box">
                            <img className='w-60 h-full rounded-box object-fill' src={IMAGES.dlIos} alt='download ios image'/>
                        </div>
                    </div>
                </div>
                 {/* Right Image */}
                <div className="w-[36rem] h-full rounded-3xl">
                    <img className='w-[36rem] h-full rounded-3xl object-cover' src={IMAGES.homePageImg} alt='homepage image'/>
                </div>
            </div>
        </div>
    )
}

export default Home