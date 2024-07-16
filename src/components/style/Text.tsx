import styled from 'styled-components'

const Text = styled.span<{fontSize? : number; color?: string; cursor?: string; opacity?: number; hoverOpacity?: number;}>`
    font-size: ${props => props.fontSize || 16}px;
    color: #${props => props.color || "333"};
    cursor: ${props => props.cursor};
    opacity: ${props => props.opacity || 1};
    &: hover {
        opacity: ${props => props.hoverOpacity || 1};
    }
`

export default Text;