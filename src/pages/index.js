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
                <div className="card">
                    <div className="">
                        All Work in One Place, Anywhere3
                    </div>
                </div>
                <div className="card">Auto Optimized Inbox</div>
                <div className="card">Privacy Built-in</div>
                <div className="card">Full calendar integration</div>


            </div>


        </>
    )
}

export default Home
