import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  tip: {
    white: '#FFFFFF',
    lightCyan: '#F4FAFA',
    lightCyan2: '#C5E4E7',
    darkCyan: '#7F9C9F',
    darkCyan2: '#5E7A7D',
    cyan: '#26C2AD',
    veryDark: '#00474B'
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
