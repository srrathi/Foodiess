import React, { useState } from 'react'
import './App.css';
import ApiSearch from './components/ApiSearch';
import Form from './components/Form';
import Nav from './components/Nav';
import Receipe from './components/Receipe';

const App = () => {
  const [search, setSearch]    = useState('chicken')
  const [receipes, setReceipe] = useState([])

  return (
    <div className="App">

      <Nav/>

      <Form
        search     = { search }
        setSearch  = { setSearch }
      />

      <ApiSearch
        search     = { search }
        receipes   = { receipes }
        setReceipe = { setReceipe }
      />

      <Receipe
        receipes   = { receipes }
      />

    </div>
  )
}

export default App;
