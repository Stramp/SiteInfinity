import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import { light, darken } from 'styles/themes'
import { RouterContext } from 'next/dist/shared/lib/router-context'

export const decorators = [
  Story => (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
export const parameters = {
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  }
}


