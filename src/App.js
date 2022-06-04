import { React, useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { purple, green, yellow, lightBlue, blue } from '@mui/material/colors'
import Multiplicacao from './pages/Multiplicacao'

const theme = createTheme({
  palette: {
    primary: yellow,
    secondary: blue,
    default: purple
  },
  actions: {
    alarm: purple
  },
  error: {
    main: '#4dc8f4',
  },
  typography: {
    atividade: {
      fontSize: '1.2rem',
      fontFamily: 'Roboto'
    },
    guia:{
      fontFamily: 'Roboto',
      fontWeight: 700,
      fontSize: '1.2rem'
    },
    fontFamily: 'Roboto',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Multiplicacao/>
    </ThemeProvider>
  );
}

export default App;