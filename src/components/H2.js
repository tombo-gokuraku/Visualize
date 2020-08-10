import tw, { styled, css } from "twin.macro"

const H2 = styled.h2(() => [
  tw`text-base font-thin xl:text-xl md:text-lg`,
  css`
    margin: 0.5em;
  `,
])

export default H2
