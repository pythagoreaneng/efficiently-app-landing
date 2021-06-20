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

            <div className="mx-3 grid justify-items-stretch">
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
                    style={{backgroundColor: "#BBF5D5"}}
                    title='Think'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <Card 
                    style={{backgroundColor: "#FFD8D7"}}
                    title='Play'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <div className="my-3 p-12 rounded-xl shadow-2xl bg-gray-100 text-center">
                    <label className="font-bold text-xl" htmlFor='email'>Join the beta user waitlist
                    <p className="mt-2 mb-10 font-thin text-xs">Subscribe to our newsletter</p>
                    
                    </label>
                    
                    <form className="">
                        <input 
                                id='email'
                                type='email'
                                name='email'
                                className='rounded-md text-center p-1' 
                                placeholder='email@example.com'>
                        </input>
                        <button
                            type='submit'
                            className='ml-2 px-2 py-1 text-sm text-white bg-blue-400 rounded-md'>
                            Early Access
                        </button>
                    </form>
                </div>
            </div>
            
        </>
    )
}

export default Home
