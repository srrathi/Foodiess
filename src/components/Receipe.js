import React from 'react'

const Receipe = ({ receipes }) => {
    return (
        <div className="receipes">
            {receipes.map(receipe => (
                <div className="receipe" key={Math.random()}>
                    <h1>{receipe.recipe.label}</h1>
                    <ol>
                        {receipe.recipe.ingredients.map(ingredient =>(
                            <li key={Math.random()}>{ingredient.text}</li>
                        ))}
                    </ol>
                    <p>Calories count : {receipe.recipe.calories}</p>
                    <img src={receipe.recipe.image} alt=""></img>
                </div>
            ))}
        </div>
    );
}

export default Receipe
