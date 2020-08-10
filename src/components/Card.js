import tw, { styled, css } from "twin.macro"

const Card = styled.div(() => [
  tw`flex flex-col items-center justify-center w-full mb-10 rounded-lg md:(w-1/3 mx-3) content-start`,
  css`
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
    background-color: rgba(255, 255, 255, 0.075);
  `,
])
export default Card
