import styled from "styled-components";

const Border = styled.div<{ marginB?: number }>`
  border-bottom: 1px solid #000;
  margin-bottom: ${(props) => props.marginB || 8}px;
`;

export default Border;
