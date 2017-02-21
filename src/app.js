'use strict'

import React from 'react'
import { render } from 'react-dom'

import Header from 'components/header'

require('normalize.css')
require('stylesheets/app.scss')

render(
  <Header />,
  document.getElementById('app')
)
