import { renderWithTheme } from 'utils/tests/helpers'

import SocialMedia from '.'

describe('<SocialMedia />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<SocialMedia />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
