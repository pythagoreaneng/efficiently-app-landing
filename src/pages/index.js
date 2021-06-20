import React from 'react'
import Card from '../components/Card'


const Home = () => {
    return (
        <>
            <div className="m-10 text-center">
                <h1 className="font-bold text-4xl ">Do <span className="text-blue-400">Efficiently</span></h1>
                <p>Manage your time and tasks.</p>
                <button className="mt-10 px-3 py-2 bg-blue-400 rounded-3xl font-medium text-white">
                    Early Access
                </button>
            </div>

            <div className="m-5 grid justify-items-stretch">
                <Card 
                    style={{backgroundColor: "#EAEC8C"}}
                    title='Plan'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <Card 
                    style={{backgroundColor: "#447DD2"}}
                    title='Work'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <Card 
                    style={{backgroundColor: "#447DD2"}}
                    title='Think'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <Card 
                    style={{backgroundColor: "#FFD8D7"}}
                    title='Play'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <div className="m-5 p-12 rounded-xl shadow-2xl bg-gray-100 text-center">
                    <h1 className="font-bold text-xl">Join the beta user waitlist</h1>
                    <p className="font-thin text-xs">Subscribe to our newsletter</p>
                </div>
            </div>
            
        </>
    )
}

export default Home
