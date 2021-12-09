import React from 'react'

const Skill = () => {

    let arr = [
        ['JavaScript', '70%'],
        ['React', '80%'],
        ['Express', '80%'],
        ['Node.js', '75%'],
        ['Redux', '70%'],
        ['PHP', '55%'],
        ['Laravel', '65%'],
        ['Python', '55%'],
        ['C#', '50%'],
        ['Java', '65%'],
        ['C++', '65%'],
        ['Bootstrap', '80%'],
        ['Tailwind', '70%'],
        ['MySQL', '80%'],
        ['MongoDB', '80%']
    ]

    let skills = arr.map(item => {
        return (
            <div class="flex flex-row w-full m-auto items-center ">
                <div className="w-3/12 md:w-2/12 font-bold m-auto">{item[0]}</div>
                <div className="w-9/12 md:w-10/12 m-auto">
                    <div className="">
                        <div className="overflow-hidden h-4 text-xs flex rounded bg-gray-300">
                            <div style={{ width: `${item[1]}` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-800"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div class="w-full md:w-8/12 lg:w-4/5 ml-auto  bg-no-repeat bg-cover bg-center" id="skills">
            <div class="bg-gray-300 bg-opacity-30 h-screen flex justify-center items-center p-10 ">
                <div class="flex  flex-col w-full md:w-2/3 h-full mt-auto">
                    <p className="font-bold text-3xl underline text-gray-700 mt-16 md:mt-0 ">Skills</p>
                    {skills}
                </div>
            </div>
        </div >
    )
}
export default Skill;