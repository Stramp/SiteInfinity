import { renderWithTheme } from 'utils/tests/helpers'

import Logo from '.'

describe('<Logo />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Logo />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
