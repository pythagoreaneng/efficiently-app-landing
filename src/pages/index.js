import React from 'react'

const Home = () => {
    return (
        <>

            {/* <div className="grid grid-cols-1 grid-flow-row-dense lg:grid-cols-2 gap-10 m-10 font-semibold text-base sm:text-4xl">
                <div className="col-span-2 bg-gray-200 sm:p-40 rounded-3xl hover:bg-gray-300">All Work in One Place, Anywhere</div>
                <div className=" bg-gray-200 sm:p-40 rounded-3xl hover:bg-gray-300">Auto Optimized Inbox</div>
                <div className=" bg-gray-200 sm:p-40 rounded-3xl hover:bg-gray-300">Privacy Built-in</div>
                <div className=" bg-gray-200 sm:p-40 rounded-3xl hover:bg-gray-300">Full calendar integration</div>
                <div className=" bg-gray-200 sm:p-40 rounded-3xl hover:bg-gray-300">Manage Intuitively</div>
                <div className=" bg-gray-200 sm:p-40 rounded-3xl hover:bg-gray-300">Drag and Drop to calendar</div>



            </div> */}

            <div className="grid  grid-cols-1  sm:grid-cols-2 gap-10 m-10 h-full ">
                {/* first card */}
                <div className="relative grid grid-rows-2 grid-flow-col hover:bg-gray-300 bg-gray-200 rounded-3xl font-bold py-20  justify-items-center">
                    <div className="flex justify-center">
                        <div className="flex justify-items-stretch">
                            <svg className="w-20 h-20 blue-pulse flex-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                            <svg className="w-20 h-20 blue-pulse flex-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            <svg className="w-20 h-20 blue-pulse flex-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                        </div>
                    </div>
                    <p className="absolute bottom-10 mx-5">All Work in One Place, Anywhere</p>
                </div>
                <div className="card">Auto Optimized Inbox</div>
                <div className="card">Privacy Built-in</div>
                <div className="card">Full calendar integration</div>


            </div>


        </>
    )
}

export default Home
