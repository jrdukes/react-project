import React from 'react'
import { render } from 'react-dom'
import Pet from './Pet'

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Nick', animal: 'Dog', breed: 'Lab Mix' }),
    React.createElement(Pet, { name: 'Joe', animal: 'Dog', breed: 'Mutt' }),
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
