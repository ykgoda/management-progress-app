import styled from "styled-components";

const SecondaryButton = styled.button<{
  paddingVertical?: number;
  widthRatio?: number;
  borderRadius?: number;
  backgroundColor?: string;
  textColor?: string;
  opacity?: number;
}>`
  padding: ${(props) => props.paddingVertical || 8}px 0;
  width: ${(props) => props.widthRatio || 40}%;
  border-radius: ${(props) => props.borderRadius || 8}px;
  background-color: ${(porps) => porps.backgroundColor || "#fff"};
  color: ${(props) => props.textColor || "#111"};
  border: 1px solid #111;
  &:hover {
    opacity: ${(props) => props.opacity || 0.5};
  }
`;

export default SecondaryButton;
