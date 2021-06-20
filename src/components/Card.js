import React from 'react'

function Card(props) {
    return (
        <div className="my-3 p-12 rounded-xl shadow-2xl bg-gray-100 text-white" style={props.style}>

            <div className="p-2 text-2xl font-bold">
                <h3>{props.title} <span className="text-blue-400">Efficiently</span></h3>
            </div>

            <div className="sm:grid grid-cols-2">

                {/* left container */}
                <div className="">
                    
                    <div className="p-5 text-gray-700">
                        <p>{props.body}</p>
                    </div>

                </div>

                {/* right container */}
                <div className="">

                    <div className="image-container">
                        <img src={props.imageUrl} alt="" />
                    </div>

                </div>
            </div>
            
            
        </div>
    )
}

export default Card
