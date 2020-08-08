import tw, { styled, css } from "twin.macro"

const H3 = styled.h3(() => [
  tw`text-xl font-bold xl:text-3xl md:text-2xl`,
  css`
    margin-bottom: 0.35em;
  `,
])

export default H3
