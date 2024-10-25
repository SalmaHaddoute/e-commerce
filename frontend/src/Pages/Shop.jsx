import React from 'react'
import Hero from '../Compenents/Hero/Hero'
import Popular from '../Compenents/Popular/Popular'
import Offeres from '../Compenents/Offeres/Offeres' 
import NewCollections from '../Compenents/NewCollections/NewCollections'
import NewsLetters from '../Compenents/NewsLetter/NewsLetters'


export default function Shop() {
    return (
        <div>
        <Hero />
        <Popular />
        <Offeres />
        <NewCollections />
        <NewsLetters />
        </div>
    )
}

