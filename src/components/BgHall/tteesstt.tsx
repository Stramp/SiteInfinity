import { renderWithTheme } from 'utils/tests/helpers'

import BgHall from '.'

describe('<BgHall />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<BgHall />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
