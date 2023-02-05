import { renderWithTheme } from 'utils/tests/helpers'

import Section from '.'

describe('<Section />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<Section />)

    expect(container).toBeDefined()
  })
})
