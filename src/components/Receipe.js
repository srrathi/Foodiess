import React from 'react'

const Receipe = ({ receipes }) => {
    return (
        <div className="receipes">
            {receipes.map(receipe => (
                <div className="receipe" key={Math.random()}>
                    <div style={{ marginRight: "20px" }}>
                        <h2>{receipe.recipe.label}</h2>
                        <div style={{ height: "200px", width: "200px", minWidth: "200px", position: "relative", objectFit: "contain" }}>
                            <img src={receipe.recipe.image} alt=""></img>
                        </div>
                    </div>
                    <div>
                        <p>Steps: </p>
                        <ul>
                            {receipe.recipe.ingredients.map(ingredient => (
                                <li key={Math.random()}>{ingredient.text}</li>
                            ))}
                        </ul>
                        <p>Calories count : {Math.round(receipe.recipe.calories * 100) / 100}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Receipe
