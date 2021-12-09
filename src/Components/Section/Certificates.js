import React from 'react'

const Certificates = () => {

    let arr = [
        ['React + Redux course', ''],
        ['Modern javaScript for React JS-ES6', ''],
        ['Front End Development Libraries', ''],
        ['Web Development Masterclass- Complete Certificate Course', ''],
        ['Front-End Web UI Frameworks and Tools: Bootstrap 4', ''],
        ['MERN Stack with Blog Project', ''],
        ['AWS Lambda Complete Serverless Node.JS Course From Scratch', ''],
        ['Complete JAVASCRIPT with HTML5,CSS3 from zero to Expert-2021', ''],
    ]

    let certificates = arr.map(item => {
        return (
            <div class="flex flex-row w-full m-auto items-center bg-white dark:border-gray-700 rounded-lg border border-gray-400">
                <div class="p-2">
                    <h4 class="text-gray-800 dark:text-gray-100 font-bold md:mb-3">{item[0]}</h4>
                    <p class="text-gray-800 dark:text-gray-100 text-sm hidden md:block">{item[1]}</p>
                </div>

            </div>
        )
    })

    return (
        <div class="w-full md:w-8/12 lg:w-4/5 ml-auto  bg-no-repeat bg-cover bg-center" id="certificates">
            <div class="bg-gray-300 bg-opacity-30 h-screen flex justify-center items-center p-10 ">
                <div class="flex  flex-col w-full md:w-2/3 h-full mt-auto">
                    <p className="font-bold text-3xl underline text-gray-700 mt-16 md:mt-0 ">Certificates</p>
                    {certificates}
                </div>
            </div>
        </div >
    )
}
export default Certificates;