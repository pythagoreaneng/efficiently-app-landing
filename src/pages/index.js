import React from 'react'
import Card from '../components/Card'


const Home = () => {
    return (
        <div className='m-4 md:m-10'>
            <div className="my-20 text-center">
                <h1 className="font-bold text-4xl md:text-9xl ">Do <span className="text-blue-400">Efficiently</span></h1>
                <p>Manage your time and tasks.</p>
                <button className="mt-10 px-3 bg-blue-400 rounded-3xl font-medium text-white">
                    Early Access
                </button>
            </div>

            <div className="grid gap-4 md:grid-cols-2  md:gap-10">
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
                <Card 
                    style={{backgroundColor: "#D5D4F5"}}
                    title='Live'
                    body='Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor. Rem ipsum dolor sit amet,  consectetur adipiscing elit.'
                />
                <div className="rounded-xl shadow-2xl bg-gray-100 ">
                    <div className='py-28 text-center'>
                        <label className="font-bold text-3xl md:text-5xl" htmlFor='email'>Join the Waitlist
                            <p className="mt-2 mb-10 font-thin text-xs">Subscribe to our newsletter to get an early access</p>
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
                                className='m-2 px-2 py-1 text-sm text-white bg-blue-400 rounded-md'>
                                Join
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home
