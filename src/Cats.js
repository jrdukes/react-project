import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-fetch'

const Cats = ({ id }) => {
  const [cats, setCats] = useState([])
  const [renderStatus, setRenderStatus] = useState('loading')

  async function getCats () {    fetch('http://localhost:5555/cats', 
  method: 'GET'

})


 
}

useEffect () => {


}

let DisplayTheStuff = null
