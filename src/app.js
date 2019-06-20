import React from 'react'
import { render } from 'react-dom'

const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Nick', animal: 'Dog', breed: 'Lab Mix' }),
    React.createElement(Pet, { name: 'Tom', animal: 'Dog', breed: 'Mutt' }),
    React.createElement(Pet, {
      name: 'Fred',
      animal: 'Ferret',
      breed: 'Ferret'
    }),
    React.createElement(Pet, {
      name: 'Wayne',
      animal: 'Llama',
      breed: 'Llama Mix'
    })
  ])
}

render(React.createElement(App), document.getElementById('root'))
