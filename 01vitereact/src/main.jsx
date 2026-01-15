import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Children } from 'react'

//custom function
function MyApp(){
  return(
    <h3>sri harivansh</h3>
  )
}

//custom react 
const ReactElement = {
  type: 'a',
  props:{
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'click to google'
}

//custom react using inbuilt 
const username = ' shaurya'
const AnotherElement = React.createElement(
  'a',
  {
    href: 'https://google.com',
    target: '_blank'
  },
  'click to google',
  username  //evaluated expression
);


createRoot(document.getElementById('root')).render(
  AnotherElement
)
       