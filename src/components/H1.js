import tw, { styled, css } from "twin.macro"

const H1 = styled.h1(() => [
  tw`text-2xl font-thin xl:text-4xl md:text-3xl`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H1
