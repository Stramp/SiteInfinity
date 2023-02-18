import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/global'
import { light, darken } from 'styles/themes'

function App({ Component, pageProps }: AppProps) {
  const n = true
  const t = n ? light : darken
  return (
    <ThemeProvider theme={t}>
      <Head>
        <title>Boilerplate</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
