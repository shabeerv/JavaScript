import { render, screen } from '@testing-library/react'
import { Greet } from './Greet'

//describe.skip
describe('Greet', () => {
  test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })

  // describe('Nested', () => {
  //     //test.only
  //     test.skip('Greet renders with a name', () => {
  //         render(<Greet name='Shabeer' />)
  //         const textElement = screen.getByText('Hello Shabeer')
  //         expect(textElement).toBeInTheDocument()
  //     })
  // })
})

//GROUP
describe('Nested', () => {
  //test.only
  test.skip('Greet renders with a name', () => {
    render(<Greet name="Shabeer" />)
    const textElement = screen.getByText('Hello Shabeer')
    expect(textElement).toBeInTheDocument()
  })
})
