import styled from 'styled-components'

const Input = styled.input<{paddingVertical?: number, paddingHorizontal?: number, borderRadius?: number}>`
    padding: ${porps => porps.paddingVertical || 4}px ${props => props.paddingHorizontal || 8}px;
    border: 1px solid #000;
    border-radius: ${props => props.borderRadius || 4}px;
    width: ${props => props.width || 200}px;
`

export default Input