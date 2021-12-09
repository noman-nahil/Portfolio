import React from 'react'

const About = () => {
    return (
        <div class="w-full md:w-8/12 lg:w-4/5 ml-auto  bg-no-repeat bg-cover bg-center" id="about">
            <div class="bg-gray-300 bg-opacity-50 h-screen flex justify-center items-center p-10 text-white">
                <div class="flex flex-col w-full ">
                    <div className="w-full md:w-2/3  bg-opacity-80 rounded-xl mt-auto mx-auto">
                        <p className="font-bold text-3xl underline text-gray-800">About Me</p>
                        <div>
                            <p className="text-gray-700 text-justify p-0 md:p-2 lg:p-4 font-normal text-xl  md:text-2xl md:font-bold">
                                I am a computer science graduate with extensive expertise in developing creative websites.I have a strong ambition to be creative and focused.I am motivated enough to be positive.
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </div >


    )
}
export default About;