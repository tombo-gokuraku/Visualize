import tw, { styled, css } from "twin.macro"

const H1 = styled.h1(() => [
  tw`text-xl font-thin xl:text-3xl md:text-2xl`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H1
