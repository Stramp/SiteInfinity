import { renderWithTheme } from 'utils/tests/helpers'

import Svg1 from '.'

describe('<Svg1 />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Svg1 />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
