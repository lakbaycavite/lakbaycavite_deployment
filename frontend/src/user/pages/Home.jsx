// import React from 'react'
import IMAGES from "../../images/images"

const Home = () => {

    return (
        <div className="max-w-screen">
            <div className="space-x-[8rem] flex flex-row justify-center items-center mt-16 max-w-screen h-[36rem]">
                <div className="w-[42rem] h-[24rem]">
                    {/* navigate your way */}
                    <div className="w-full h-24 flex items-end">
                        <label className="text-5xl">Navigate your way Cavite</label>
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
                            <img className='w-60 h-full rounded-box object-fill' src={IMAGES.dlAndroid} alt='download android image' />
                        </div>
                        <div className="w-60 h-full rounded-box">
                            <img className='w-60 h-full rounded-box object-fill' src={IMAGES.dlIos} alt='download ios image' />
                        </div>
                    </div>
                </div>
                {/* Right Image */}
                <div className="w-[36rem] h-full rounded-3xl">
                    <img className='w-[36rem] h-full rounded-3xl object-cover' src={IMAGES.homePageImg} alt='homepage image' />
                </div>
            </div>

            {/* footer */}
            <footer className="footer bg-base-100 text-base-content p-10 mt-16">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Menu</a>
                    <a className="link link-hover">Map</a>
                    <a className="link link-hover">Community</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                    
                </nav>
            </footer>
        </div>
    )
}

export default Home