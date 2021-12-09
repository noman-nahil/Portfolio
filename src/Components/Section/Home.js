import React from 'react'

const Home = () => {
    return (

        <div class="w-full md:w-8/12 lg:w-4/5 ml-auto  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(https://i.ibb.co/CHRZ1h2/b10.jpg)` }} id="home" >
            <div class="bg-gray-300 bg-opacity-50 h-screen flex justify-center items-center p-10 text-white">
                <div class="flex flex-col-reverse md:flex-row w-full">
                    <div className="md:w-3/5 bg-gray-700 bg-opacity-80 rounded-xl mt-auto ">
                        <div>
                            <p className="text-opacity-0 text-xl font-black md:text-3xl text-center">I'm <span className="text-xl lg:text-5xl">Full Stack Developer</span></p>
                        </div>
                        <div>
                            <p className="text-lg md:text-3xl font-bold text-center ">ABDULLAH AL NOMAN</p>
                        </div>
                    </div>
                    <div className="md:w-2/5 flex justify-center ">
                        <img className="md:rounded-3xl rounded-full h-64 w-56 md:h-96 md:w-80" src="https://i.ibb.co/Nyp23jx/home-Image.jpg" />
                    </div>
                </div>
            </div >
        </div >


    )
}
export default Home;

{/* <div class="grid grid-rows md:grid-cols-3 gap-2">
<div className="col-span-2 text-gray-50 bg-gray-500 m-1 p-2  md:p-3 rounded-2xl w-full  h-26 md:h-36 self-center">
    <div>
        <p className="text-opacity-0 text-xl font-black md:text-3xl text-center">I'm <span className="text-xl lg:text-5xl">Full Stack Developer</span></p>
    </div>
    <div>
        <p className="text-lg md:text-3xl font-bold text-center">ABDULLAH AL NOMAN</p>
    </div>
</div>
<div className="flex justify-end">
    <img className="md:rounded-3xl rounded-full h-64 w-56 md:h-96 md:w-80" src={homeImage} />
</div>

</div> * <div class="bg-cover bg-center ..." style="background-image: url(...)"></div> */}