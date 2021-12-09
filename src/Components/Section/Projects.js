import React from 'react'

const Projects = () => {
    let arr = [
        ['Burger Builder', 'JavaScript,React,Redux,Firebase', 'It is a web-based project.', 'Programming Language: JavaScript.',
            'JavaScript Library: React, Redux.', 'Database: Firebase'],
        ['Educational Website', 'JavaScript,Node.js,Express.js,MySQL', 'It is a web-based project.', 'Programming Language: JavaScript.',
            'Backend Frameworks: Node.js.', 'Database: MySQL'],
        ['Educational Website', 'PHP,Laravel,MySQL', 'It is a web-based project.', 'Programming Language: PHP.',
            'Backend Frameworks: Laravel.', 'Database: MySQL'],
        ['Scintilib', 'JavaScript,PHP,MySQL', 'It is a web-based project.', 'Programming Language: JavaScript,PHP.',
            'Database: MySQL',],
        ['Blog (MERN)', 'MongoDB,Express,React,Node', 'It is a web-based project.', 'Programming Language: JavaScript,',
            'Database: MongoDB',],
        ['Github user Finder', 'JavaScript', 'It is a web-based project.', 'Programming Language: JavaScript.',]

    ]

    let projects = arr.map(item => {
        return (
            <div class="">
                <div class="w-full h-auto md:h-full flex flex-col  dark:bg-gray-800 bg-white dark:border-gray-700 rounded-lg border border-gray-400 mb-3 py-5 px-4">
                    <div class="">
                        <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-0 md:mb-3">{item[0]}</h4>
                        <p className="text-gray-800 dark:text-gray-100 text-sm hidden md:block">{item[2]}</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm hidden md:block">{item[3]}</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm hidden md:block">{item[4]}</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm hidden md:block">{item[5]}</p>
                        <p className="text-gray-800 dark:text-gray-100 text-sm  md:hidden">{item[1]}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div class="w-full md:w-8/12 lg:w-4/5 ml-auto " id="projects">
            <div class="  h-screen flex justify-center items-center p-10 ">
                <div class="flex  flex-col w-full md:w-2/3 h-full mt-auto">
                    <p className="font-bold text-3xl underline text-gray-700 mt-5 md:mt-0 ">Projects</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 md:gap-2  my-auto ">
                        {projects}
                    </div>
                </div>

            </div>
        </div >
    )
}

export default Projects;