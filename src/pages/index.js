import React from 'react'
import Card from '../components/Card'


const Home = () => {
    return (
        <>
            <div className="grid justify-items-stretch">
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
            </div>
        </>
    )
}

export default Home
