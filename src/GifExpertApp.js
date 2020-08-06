import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    // const categories = ['Beisbol', 'Futbol', 'Baloncesto'];

    const [categories, setCategories] = useState(['Beisbol']);

    // const handleAdd = () => {
    //     // setCategories( ['Futbol Américano', ...categories] );
    //     setCategories( cats => [...cats, 'Futbol Américano'] )

    // }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories} />
            <br/>
            {
                categories.map(category => <GifGrid category={category} key={category}/> )
            }
        </>
    )
}
