import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from './redux/store.config.js'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </Provider>

  </StrictMode>,
)
