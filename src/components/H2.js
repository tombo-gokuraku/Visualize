import tw, { styled, css } from "twin.macro"

const H2 = styled.h2(() => [
  tw`text-2xl font-bold xl:text-4xl md:text-3xl`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H2
