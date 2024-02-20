import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import theme from './theme.jsx'

// const styles = {
//   global: (props) => ({
//     body: {
//       bg: mode("gray.100", "#000")(props),
//       color: mode("gray.800", "whiteAlpha.900")(props),
//     }
//   })
// }

// const config = {
//   initialColorMode: 'dark',
//   useSystemColorMode: true,
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
