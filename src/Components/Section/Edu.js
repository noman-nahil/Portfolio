import React from 'react'

const Edu = () => {
    return (
        <div class="w-full md:w-8/12 lg:w-4/5 ml-auto" id="edu">
            <div class="bg-white bg-opacity-30 h-screen flex justify-center items-center p-10 ">
                <div class="flex  flex-col w-full md:w-2/3 h-full mt-8 md:mt-0">
                    <p className="font-bold text-3xl underline text-gray-700">Education</p>
                    <div className="bg-gray-600 text-white h-1/3 m-1 rounded-2xl">
                        <div className="md:pl-10 pl-2 pt-3  ">
                            <p className="text-xl font-bold underline">BSC</p>
                        </div>
                        <div className="md:pl-24 font-bold md:m-2 mt-3">
                            <p className="text-xl pl-3 md:pl-0 md:p-2">American international University-Bangladesh</p>
                            <p className="pl-3 md:pl-0 p-1 md:p-2">3.49 out of 4</p>
                            <p className="pl-3 md:pl-0 p-1 md:p-2">Passing Year:2021</p>
                        </div>
                    </div>
                    <div className="bg-gray-600 text-white  h-1/3 m-1 rounded-2xl">
                        <div className="md:pl-10 pl-2 pt-3">
                            <p className="text-xl font-bold underline">HSC</p>
                        </div>
                        <div className="md:pl-24 font-bold md:m-2 mt-3">
                            <p className="text-xl pl-3 md:pl-0 md:p-2">Dhaka Imperial college</p>
                            <p className="pl-3 md:pl-0 p-1 md:p-2">4.58 out of 5</p>
                            <p className="pl-3 md:pl-0 p-1 md:p-2">Passing Year:2016</p>
                        </div>
                    </div>
                    <div className="bg-gray-600 text-white  h-1/3 m-1 rounded-2xl">
                        <div className="md:pl-10 pl-2 pt-3">
                            <p className="text-xl font-bold underline ">SSC</p>
                        </div>
                        <div className="md:pl-24 font-bold md:m-2 my-auto mt-3">
                            <p className="text-xl pl-3 md:pl-0 md:p-2">Al-Amin Institute</p>
                            <p className="pl-3 md:pl-0 p-1 md:p-2">4.63 out of 5</p>
                            <p className="pl-3 md:pl-0 p-1 md:p-2">Passing Year:2014</p>
                        </div>
                    </div>

                </div>
            </div >
        </div >

    )
}
export default Edu;