import React, { useEffect } from 'react'

const ApiSearch = ({ search, receipes, setReceipe }) => {

    const APP_ID = '1e2165b1';
    const APP_KEY = '7f7769cf2b6106a93b0a6c9772c4ed96';

    const getReceipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        const data = await response.json();
        // console.log(data.hits)
        setReceipe(data.hits)
    }
    console.log(receipes);
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
