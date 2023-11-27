import { renderWithTheme } from 'utils/tests/helpers'

import Teste from '.'

describe('<Teste />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Teste />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
