import '../../App.css'
import '../Herosection'
import Herosection from '../Herosection'
import React from 'react'
import Cards from '../Cards'
import Footer from '../Footer'


function Home(){
    return(
        <>
            <Herosection />
            <Cards />
            <Footer />
        </>
    )
}
export default Home