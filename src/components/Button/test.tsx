import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Button />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Button />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
