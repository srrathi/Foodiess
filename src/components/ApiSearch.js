import React, { useEffect } from 'react'

const ApiSearch = ({ search, receipes, setReceipe }) => {

    const APP_ID = process.env.REACT_APP_APP_ID;
    const APP_KEY = process.env.REACT_APP_APP_KEY;

    const getReceipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        // console.log(data.hits)
        setReceipe(data.hits)
    }
    useEffect(() => {
        getReceipes();
    }, [search]);

    return (
        <div className="total-results">
            <h4>Total Resullts Found : {receipes.length}</h4>
        </div>
    )
}

export default ApiSearch
