import tw, { styled, css } from "twin.macro"

const H1 = styled.h1(() => [
  tw`text-3xl font-bold xl:text-5xl md:text-4xl`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H1
