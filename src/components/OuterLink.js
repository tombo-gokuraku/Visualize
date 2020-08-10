import styled from "@emotion/styled"

const OuterLink = styled.a`
  border-bottom: dotted 1px rgba(255, 255, 255, 0.35);
  transition: border-bottom-color 0.2s ease-in-out, color 0.2s ease-in-out;
  &:hover {
    border-bottom-color: transparent;
    color: white;
    opacity: 1;
  }
`

export default OuterLink
