import { renderWithTheme } from 'utils/tests/helpers'

import PhraseHall from '.'

describe('<PhraseHall />', () => {
  it('should render element', () => {
    const { container } = renderWithTheme(<PhraseHall />)

    expect(container.firstChild).toBeInTheDocument()
  })
})
