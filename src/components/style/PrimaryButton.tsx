import styled from 'styled-components'

const PrimaryButton = styled.button<{paddingVertical?: number, widthRatio?: number, borderRadius?: number, backgroundColor?: string, textColor?: string, opacity?: number}>`
    padding: ${props => props.paddingVertical || 8}px 0;
    width: ${props => props.widthRatio || 40}%;
    border-radius: ${props => props.borderRadius || 8}px;
    background-color: ${porps => porps.backgroundColor || '#000'};
    color: ${props => props.textColor || '#eee'};
    &:hover {
        opacity: ${props => props.opacity || 0.5};
    }
    &:disabled {
        background-color: #bbb;
        opacity:1;
    }
`

export default PrimaryButton