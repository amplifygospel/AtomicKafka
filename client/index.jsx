import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Consumer from './Consumer.jsx'
import Producer from './Producer.jsx'

render(
  <BrowserRouter>
    <h1>KAFKA_TEST_PAGE</h1>
    <Consumer />
    <Producer />
  </BrowserRouter>,
  document.getElementById('root')
)
