import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
export const parameters = {
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider
  }
}
