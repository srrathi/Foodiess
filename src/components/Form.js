import React, { useState } from 'react'

const Form = ({ search, setSearch }) => {

    const [input, setInput] = useState([])
    const inputTextHandler = (e) => {
        setInput(e.target.value);
    }

    const setSearchHandler = (e) => {
        e.preventDefault();
        setSearch(input)
        setInput("")
    }
    // console.log(search)

    return (
        <div>
            <form className = "search-form">
                <input placeholder="Enter the name of dish here" onChange = { inputTextHandler } className = "search-bar" type = "text" value={input}/>
                <button onClick = { setSearchHandler } className = "search-btn" type = "submit"><i class="fas fa-search"></i> Search</button>
            </form>
        </div>
    )
}

export default Form;