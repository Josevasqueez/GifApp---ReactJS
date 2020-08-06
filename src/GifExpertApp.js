import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Beisbol']);

    return (
        <>
            <h1>GifApp</h1>
            <p>Obten gifs referente a lo que sea que escribas</p>
            <AddCategory setCategories={setCategories} />
            <br/>
            {
                categories.map(category => <GifGrid category={category} key={category}/> )
            }
        </>
    )
}
