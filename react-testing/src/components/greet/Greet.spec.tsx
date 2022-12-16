import { render, screen } from "@testing-library/react"
import { Greet } from "./Greet"

describe('Greet', () => {
    //fit-only
    //xit-skip
    it('Greet renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText('Hello')
        expect(textElement).toBeInTheDocument()
    })
})

describe('Nested', () => {
    it('Greet renders with a name', () => {
        render(<Greet name='Shabeer' />)
        const textElement = screen.getByText('Hello Shabeer')
        expect(textElement).toBeInTheDocument()
    })
})